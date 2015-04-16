<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>

<link rel="stylesheet" href="css/jQueryFacebookWall.min.css" type="text/css" media="screen" />
	<!--UNMINIFIED VERSION -->
    <!--load the language translation file -->
    <script type="text/javascript" src="js/languages.js"></script> 
	<!--load the ejs templateing engine-->
	 <script type="text/javascript" src="js/ejs.js"></script>        
	<!--load the facebook wall plugin-->
	 <script src="js/jQueryFacebookWall.min.js"></script>
     
     
     
     <div class="facebook-wall"></div>
     
     
         <script>
	$(document).ready(function(){
		// Calling our plugin with a fb account username and an access token, from 
		$('.facebook-wall').jQueryFacebookWall({
			'appId': '822937947760866',
			'facebookUser':'divatoit',
			'domain': 'divato.nl',
			'installDirectory': '/', //where the plugin lives relative to your web root
			'display':'wall',
			'posts':{
				'feedType': 'feed',
				'limit': 12	
			},
			'comments':{
				'showAtStart': 3,
				'showMoreNum': 10,
				'limit': 50
			},
			'likes':{
				'minLikes': 0 
			},
			'albums':{
				'limit': 6
			},
			'events':{
				'show':false
			},
			'debug': false
		});
	})//end document ready
	</script>