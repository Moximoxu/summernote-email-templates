# Summernote Email Templates
Summernote plugin for inserting email templates.

# Usage
Include the js file:

```javascript
<script type="text/javascript" src="email_templates.js"></script>
```

Insert name of plugin while initialising Summernote:
```javascript
toolbar: [
		['insert', ['emailTemplates']]
	]
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

# Note
1. This is mainly for use by OnPay.
2. Email templates will be changed progressively.
