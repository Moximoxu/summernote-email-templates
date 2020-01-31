/**
 *
 * copyright 2020, Mohd Ikhmal Hafiq Zubir.
 * email: ikhmal.zubir@gmail.com
 * license: -
 *
 */

 (function(factory) {
     /* global define */
     if (typeof define === 'function' && define.amd) {
         // AMD. Register as an anonymous module.
         define(['jquery'], factory);
     } else if (typeof module === 'object' && module.exports) {
         // Node/CommonJS
         module.exports = factory(require('jquery'));
     } else {
         // Browser globals
         factory(window.jQuery);
     }
 }(function($) {

     /**
      * @class plugin.emailTemplates
      *
      * Initialize in the toolbar like so:
      *   toolbar: ['insert', ['emailTemplates']]
      *
      * Email Templates Plugin
      */
     $.extend($.summernote.plugins, {
         /**
          * @param {Object} context - context object has status of editor.
          */

         'emailTemplates': function(context) {

           // Insert templates into variables
           var summernote_emailTemplate_template1 = '<div class="summernote_emailTemplate_container">'+
           '<p style="text-align: center; ">'+
              '{header_title}'+
            '</p>'+

           '<p style="text-align: left;font-size: 14px;">'+
              '<font face="Tahoma">'+
                '<span style="font-size: 20px;">Pengesahan pembelian</span>'+
                '<p style="font-size: 14px;">Produk bernombor #123456 telah berjaya diproses dan bersedia untuk dihantar melalui pengedar kami</p>'+
                '<p style="font-size: 14px;">Terima kasih kerana telah menggunakan kemudahan kami</p>'+
              '</font>'+
            '</p>'+
             '</div>';

            var summernote_emailTemplate_template2 = '<div class="summernote_emailTemplate_container">'+
            '<p style="text-align: center;">'+
               '{header_title}'+
           '</p>'+

            '<p style="text-align: center;">'+
               '<img src="https://onpay.my/assets/img/onpay-logo.png" style="width: 50%;">'+
             '</p>'+

            '<p style="text-align: left; font-size: 14px;">'+
              '<font face="Tahoma">'+
                '<span style="font-size: 40px;">Hello World</span>'+
              '</font>'+
            '</p>'+
            '</div>';

           // Insert templates into array
           var email_templates = [
               summernote_emailTemplate_template1,
               summernote_emailTemplate_template2
           ];

             // Variable for class summernote ui
             var ui = $.summernote.ui;

             // Toolbar button
             context.memo('button.emailTemplates', function() {
                 // Fill in template array with usable buttons
                 var list = "";
                 for (var counter = 0; counter < email_templates.length; counter++) {
                     list += '<button id="summernote_emailTemplate_button'+ (counter) +'" class="btn btn-light summernote_emailTemplate_template_btn" style="width:100%" data-email-template="' + counter + '" data-dismiss="modal">Email template '+ (counter + 1) +
                     ' <div id="summernote_emailTemplate_canvas'+ counter +'" class="summernote_emailTemplate_templatePic"></div></button>';
                 }

                 // Variable of modal that is to be inserted
                 var summernote_emailTemplate_modal = '<div id="summernote_emailTemplate_Modal" class="modal fade" role="dialog">'+
                 	'<div class="modal-dialog">'+
                 		'<div class="modal-content">'+
                 			'<div class="modal-header">'+
                 				'<h4 class="modal-title" id="summernote_emailTemplate_Modal_title">Pick a template</h4>'+
                 				'<button type="button" id="summernote_emailTemplate_Modal_close" class="btn btn-light summernote_emailTemplate_Modal_close" data-dismiss="modal" style="float:right"><i class="fa fa-times-circle" aria-hidden="true"></i></button>'+
                 			'</div>'+
                 			'<div class="modal-body" id="summernote_emailTemplate_Modal_container">'+ list +
                      '</div>'+
                 	   '</div>'+
                   '</div>';

                   var prefetch_logo = '<link rel="prefetch" href="https://onpay.my/assets/img/onpay-logo.png"> <!-- Preload logo -->';

                 // Inserts modal into page
                 $("body").append(summernote_emailTemplate_modal);

                 // Insert snapshots of templates
                 for (var count = 0; count < email_templates.length; count++){
                   var template_canvas = document.getElementById("summernote_emailTemplate_canvas" + count);
                   template_canvas.innerHTML = email_templates[count];
                 }

                 // Prefetch logo
                 $("head").append(prefetch_logo);

                 // Function of template buttons
                 $('.summernote_emailTemplate_template_btn').click(function() {
                   var templateNum = $(this).attr("data-email-template");
                   context.invoke('editor.pasteHTML', email_templates[templateNum]);
                   console.log("Inserted template");
                 });

                 // Function of button in toolbar when it is pressed
                 var $emailTemplates = ui.buttonGroup([
                     ui.button({
                         contents: '<i class="fas fa-envelope-open-text"></i>',
                         tooltip: "Email templates",
                         click: function () {
                             $('#summernote_emailTemplate_Modal').modal('show');
                         },
                         success: function() {
                           $('#summernote_emailTemplate_Modal').modal('hide');
                         }
                     })
                 ]).render();
                 return $emailTemplates;
             });
         }
     });
 }));
