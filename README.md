# Summernote Email Template
Summernote plugin for inserting email templates

# Installation
Include the js file
```javascript
<script type="text/javascript" src="email_templates.js"></script>
```

# Example
```html
<textarea id="summernote"></textarea>
```

```javascript

$('#summernote').summernote({
  toolbar: [
		['insert', ['emailTemplates']],
		['code', ['codeview']]
	]
});
```
