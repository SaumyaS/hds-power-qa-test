# HTML Transformations go here

$("/html") {
  add_canonical_tag()
  rewrite_links()
  absolutize()
  rewrite_aspnet_scripts()

  	# Add the mobile meta tags
	clean_mobile_meta_tags()


	# Needed to begin mobilizing
	remove_all_styles()
	remove_html_comments()


  add_assets()


  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

}
