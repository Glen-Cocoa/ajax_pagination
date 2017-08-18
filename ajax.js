$(function() {
	$('#container').empty();
	function renderPosts(page) {
	var isLoading = true
	$.get('http://ce-sample-api.herokuapp.com/posts.json?page=' + page, function(res) {
	var posts = res.posts;
		for(var i = 0; i < posts.length; i++) {
		var s = '<div class="post"><p class="post-content">' + posts[i].content + '</p></div>';
			$('#container').append(s);
			isLoading = false
		}
	});
}
var pageCount = 1			
var isLoading = false
renderPosts(pageCount);
		
$('#js-post-create-btn').on('click', function(e) {
var obj = { post: { content: $('#post-creator').val() } };
$.post('http://ce-sample-api.herokuapp.com/posts.json', obj, function(res) {
	console.log(res);
	renderPosts();
	$('#post-creator').val('');
		});
	});
	$(document).on("scroll",function(e){
		if($(document).scrollTop() + $(window).innerHeight() >= $(document).height() - 300){
			
			pageCount++	
			if(!isLoading){
			renderPosts(pageCount)
			}
		}
	})
});
	
