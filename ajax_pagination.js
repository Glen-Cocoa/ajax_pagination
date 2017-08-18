function clearText(){
	document.getElementById("post-creator").value = "";
	
}
	

	
//	$.ajax({
//	type: 'GET',
//	url: "http://ce-sample-api.herokuapp.com/posts.json"+document.location.search,
//	complete: function(res) {
	$(function(){
		function renderPosts(){
		$.get("http://ce-sample-api.herokuapp.com/posts.json", function(res){
		var posts = res.posts;
		$("#container").empty()
		for(var i = 0; i < posts.length; i++){
		var s = "<div class='post'><p class='post-content'>" + posts[i].content + "</p>";
		$('#container').append(s)
			}
	/*
		var loadPageNumbers = function(responseJSON){
			var current_page = responseJSON.page
			var min_page = current_page - 2
			if(min_page < 1){
				min_page = 1
			}
			var max_page = min_page + 4
			if(max_page > responseJSON.total_pages){
				max_page = responseJSON.total_pages
				min_page = max_page - 4
			}
			for(var page_number = min_page; page_number <= max_page; page_number++){
				var link = $("<a>")[0]
				link.href = "?page="+page_number
				if(page_number == current_page){
					var class_name = "btn btn-default"
			}
			else{
				var class_name = "btn btn-primary"
			}
			link.className = class_name
			link.innerHTML = page_number
			$("#page_number_container")[0].append(link)
				}	
			}
		*/
		})
	}
})
renderPosts()
				
	$('#js-post-create-btn').on('click', function(e) {
	var obj = { post: { content: $('#post-creator').val() } };
	$.post('http://ce-sample-api.herokuapp.com/posts.json', obj, function(res) {
	console.log(res);
				clearText()
			})
			
		});


