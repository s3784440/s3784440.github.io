/* Javascript */
 window.onscroll = function() {
		// console.clear();
        // console.log("Win Y: "+window.scrollY);
		var articles = document.getElementsByTagName('main')
		[0].getElementsByTagName('article');
		//console.log(articles);
		var navlinks = document.getElementsByTagName('nav')
		[0].getElementsByTagName('a');
		//console.log(navlinks);
		var n = -1;
		while (n< articles.length - 1 && articles[n+1].offsetTop <= window.scrollY){
			n++;
		}
		// console.log(n);
		for (var a=0; a<navlinks.length; a++){
			navlinks[a].classList.remove('active');
		}

			// console.log('No active link');
		if (n >= 0) {
			navlinks[n].classList.add('active');
			//console.log(articles[n].id+": "+articles[n].offsetTop);
		}
			// console.log(articles[a].id+": "articles[a].offsetTop);
      }