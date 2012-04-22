module InfozaicsHelper

	API_KEY = "P4F93DB86362DD"
	HASH = "9709ddfb5b03823bb43e028b2adfa249"

	def render_thumb(link, width, height)
		url = "http://api.url2png.com/v3/#{API_KEY}/#{HASH}/#{width}x#{height}/#{link}"
		#short_link = truncate(link, :length => 30, :omission => '...')
		link_to image_tag(url, :class => "link-thumb", :size => "#{width}x#{height}"), link, :title => "Visit #{link}", :rel => "tooltip"
	end

end
