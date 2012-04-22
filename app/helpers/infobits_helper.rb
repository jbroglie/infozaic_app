module InfobitsHelper
	API_KEY = "P4F93DB86362DD"
	HASH = "9709ddfb5b03823bb43e028b2adfa249"

	def youtube_embed_id(youtube_url)
		if youtube_url[/youtu\.be\/([^\?]*)/]
	    	youtube_id = $1
		else
	    	youtube_url[/^.*((v\/)|(embed\/)|(watch\?))\??v?=?([^\&\?]*).*/]
	    	youtube_id = $5
	    end
	end


	def youtube_embed_url(youtube_url)
		embed = 'http://www.youtube.com/embed/' + youtube_embed_id(youtube_url) + '?wmode=opaque'
	end


	def youtube_embed(youtube_url)  
	  embed_url = youtube_embed_url(youtube_url)
	  iframe = '<iframe width="380" height="295" src="' + embed_url + '" frameborder="0" allowfullscreen></iframe>'
	  iframe.html_safe
	end


	def vimeo_embed_id(vimeo_url)
    	vimeo_url[/^(?:http:\/\/)?(?:www\.)?vimeo\.com\/(\d+)/]
    	vimeo_id = $1
	end


	def vimeo_embed_url(vimeo_url)
		embed = 'http://player.vimeo.com/video/' + vimeo_embed_id(vimeo_url);
	end

	def vimeo_embed(vimeo_url)  
	  embed_url = vimeo_embed_url(vimeo_url)
	  iframe = '<iframe width="380" height="225" src="' + embed_url + '" ?byline=0&amp;portrait=0" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>'
	  iframe.html_safe
	end

	def render_thumb(link, width, height)
		url = "http://api.url2png.com/v3/#{API_KEY}/#{HASH}/#{width}x#{height}/#{link}"
		short_link = truncate(link, :length => 30, :omission => '...')
		link_to image_tag(url, :class => "link-thumb", :size => "#{width}x#{height}"), link, :title => "Visit #{short_link}", :rel => "tooltip"
	end

	

end
