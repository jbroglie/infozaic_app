module InfobitsHelper
	API_KEY = "P4F93DB86362DD"
	PRIVATE_KEY = "S5A70CC6C1322E"

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
	  aspect = (295.0 / 380.0).to_s
	  iframe = '<iframe width="380" height="295" data-aspect="' + aspect + '" src="' + embed_url + '" frameborder="0" allowfullscreen></iframe>'
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
	  aspect = (225.0 / 380.0).to_s
	  iframe = '<iframe width="380" height="225" data-aspect="' + aspect + '" src="' + embed_url + '" ?byline=0&amp;portrait=0" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>'
	  iframe.html_safe
	end

	def render_thumb(link, width, height)
		url = render_thumb_url(link,width,height)
		short_link = truncate(link, :length => 30, :omission => '...')
		link_to image_tag(url, :class => "link-thumb", :size => "#{width}x#{height}"), link, :title => "Visit #{short_link}", :rel => "tooltip"
	end

	def render_thumb_url(link, width, height)
		safe_url = CGI.escape(link)
	  	token = Digest::MD5.hexdigest("#{PRIVATE_KEY}+#{safe_url}")
		url = "http://api.url2png.com/v3/#{API_KEY}/#{token}/#{width}x#{height}/#{safe_url}"
		new_url = "http://beta.infozaic.com/assets/logo.png"
	end


	def get_icon(type, link)
		icon = "<a title='#{type}' class='infobit-icon infobit-icon-#{type}' href='#{link}'></a>" 
		icon.html_safe
	end




	

end
