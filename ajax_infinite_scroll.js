$(function() {
	function renderPosts(page) {
	$.get('http://ce-sample-api.herokuapp.com/posts.json?page=' + page, function(res) {
	var posts = res.posts;
		for(var i = 0; i < posts.length; i++) {
		var s = '<div class="post"><p class="post-content">' + posts[i].content + '</p></div>';
			$('#container').append(s);
				if(i == posts.length){
					$("#end").text("You have reached the end")
				}
		}
		isLoading = false	
	});
}
var pageCount = 1			
var isLoading = false
renderPosts(pageCount);

function inFade(){
	$("#loading").text("LOADING").fadeIn(500)
}

function outFade(){
	$("#loading").text("LOADING").fadeOut(500)
}
		
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
			if(!isLoading){
				inFade()
				outFade()
				isLoading = true
				pageCount++
				renderPosts(pageCount)
			}
		}
	})
	

});
	
