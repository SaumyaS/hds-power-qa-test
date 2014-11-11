# Place holder/example file


$$("#main_content_wrapper"){
	attributes(class: "mw_home")
	$(".//nav[@class='product-categories']"){
		attributes(data-ur-set: "toggler")
		$("./h2"){
			attributes(data-ur-toggler-component: "button", data-ur-id: "productCat")
		}
		$("./ul"){
			attributes(class: "mw_productContent")
			attributes(data-ur-toggler-component: "content", data-ur-id: "productCat")
		}
		$("./ul/li"){
			attributes(data-ur-set: "toggler", class: "mw_productContentItem")
			$("./a"){
				wrap("div", class: "mw_catButton")
				
			}
			$("./div[@class='mw_catButton']"){
				attributes(data-ur-toggler-component: "button")
				add_class("subToggler")

			}
			$("./ul"){
				
				attributes(data-ur-toggler-component: "content")
			}
		}
	}
}
