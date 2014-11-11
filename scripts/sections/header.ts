$("./head"){
	$("./script[contains(@src, 'dojo.js')]") {
		match($secure){
			with(/true/){

				insert_after("script", "dojo.config.dojoIframeHistoryUrl = 'https://"+$host+"/wcsstore/dojo15/dojo/resources/iframe_history.html'", type:"text/javascript")
			}
			else(){
				insert_after("script", "dojo.config.dojoIframeHistoryUrl = 'http://"+$host+"/wcsstore/dojo15/dojo/resources/iframe_history.html'", type:"text/javascript")
			}
		}
	}
}

$('./body') {

	

	table_dump(".//table")

	# $("./div[@id='page']"){
		$(".//header"){
			attributes(data-ur-set: "toggler")
			$("./a[@class='logo']"){
				wrap("div", class: "_logoBar"){
					# move_here("../div[@class='toolbar'")
					insert("div", class:"_iconsBar"){
						insert("div", class: "Icons-cart-indicator", style: "display:none;"){
							insert("span", class: "mw_itemNumber")
						}
						insert("div", id: "image-menu", class: "Icons-menu"){
							wrap("div", id: "mw_menuContainer", class: "mw_iconContainer", data-ur-toggler-component: "button", data-ur-id: "navigationBar")
						}
						insert("div", id: "image-user", data-ur-toggler-id: "user", class: "Icons-user"){
							wrap("div", id: "mw_userContainer", class: "mw_iconContainer", data-ur-toggler-component: "button", data-ur-id: "logonModal")
						}
						insert("div", id: "image-cart", class: "Icons-cart-empty"){
							wrap("div", id: "mw_cartContainer", class: "mw_iconContainer")
							log($host)
							attributes(href: "https://" + $host + "/webapp/wcs/stores/servlet/OrderCalculate?calculationUsageId=-1&updatePrices=1&catalogId=61001&errorViewName=AjaxOrderItemDisplayView&orderId=.&langId=-1&storeId=63001&URL=AjaxOrderItemDisplayView")

						}

					}
					insert_after("div", class: "mw_loginContainer"){
						move_here("//div[@id='AccountDialog']"){
							attributes(style: "")
							$("./div[@class='close1']"){
								remove()
							}
						}
					}
				}
			}
			add_class("mw-header")

			$("./div[@class='toolbar']"){
				$("./nav[@class='secondary-nav']"){

				}
				$("./div[@class='search']"){
					$("./form[@id='CatalogSearchForm']"){
						$(".//a[@id='WC_CachedHeaderDisplay_button_1']"){
							attributes(onmouseover: "", onmouseout: "", onmouseup:"", class: "Icons-search")
							$("./input[@id='search_overlay']"){
								remove()
								attributes(src: "", type: "")
							}
							# insert("div", class: "Icons-search")
						}
						
					}
				}
				$("./div[@class='account-global']"){
					# attributes(style: "display:none;")
					$(".//div[@class='account']"){
						remove()
					}
				}
			}
			# Logon Modal
			$("./div[@class='mw_loginContainer']"){
				$("./div[@class='account-dropdown']"){
					$(".//form[@id='Logon']"){
						$("./label[1]"){
							add_class("_emailID")
							insert_after("br")
						}
						$("./input[@name='logonId']"){
							insert_after("br")
							attributes(style: "")
						}
						$("./label[2]"){
							add_class("_password")
							insert_after("br")
						}
						$("./input[@name='logonPassword']"){
							insert_after("br")
						}
					}
				}
				wrap("div", class: "mw_loginWindow", data-ur-toggler-component: "content", data-ur-id: "logonModal")
				insert_after("div", class: "mw_loginMask")
			}

			# Navigation Bar
			$("./nav[@class='main-nav']"){
				attributes(data-ur-toggler-component: "content", data-ur-id: "navigationBar")
				$("./ul"){
					add_class("mw_navContainer")
					attributes(data-ur-set: "toggler")
					$("./li[@class='product-menu-flyout1']"){

						$("./a"){
							wrap("mw_buttonContainer"){
								attributes(data-ur-toggler-component:"button", data-ur-id: "productCat")
							}
						}
						$("./nav"){
							attributes(class: "product-flyout")
							
							name("div")
							$(".//li[@class='subnav_li']"){
								attributes(data-ur-toggler-component: "content", data-ur-id: "productCat")
								$("./div/a"){
									# insert_after("br")
									add_class("mw_subBars")
								}
							}
						}
					}
					$("./li[2]"){
						add_class("_menuLocations")
						add_class("mw_bars")
						insert_after("li"){
							add_class("mw_hdsPS")
						}
					}
					$("./li[contains(@class,'mw_hdsPS')]"){
						add_class("mw_bars")
						insert("a", class: "mw_hdsPSLink", "HDSupplyPowerSolutions.com")
						$("./a"){
							attributes(href: "http://www.HDSupplyPowerSolutions.com")
						}
						insert_after("li", class: "mw_help")
					}
					$("./li[contains(@class, 'mw_help')]"){
						add_class("mw_bars")
						insert("a", href: "http://" + $host + '/webapp/wcs/stores/servlet/ContentDisplayView?catalogId=61001&amp;langId=-1&amp;storeId=63001&amp;page=Help', "Help")
					}
				}
			}

		}
	# }
		
	inner_wrap("div", id: "bodyContent"){
		insert_bottom("div", id: "pers-nav-mask")
		insert_before("div", id: "pers-nav")
	}

}

# $$("#search_overlay"){
# 	remove()
# }
	
