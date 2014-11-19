$("./body") {
  # insert("footer", "Powered by Moovweb", class: "mw-footer") {
    # Move stuff here
    $(".//footer"){
    	attributes(class: "mw-footer")
    	$("./div[@class='wrap2']"){
    		$("./div[@class='welcome-statement']"){
    			remove()
    		}
    		$("./div[@class='contact']"){
    			remove()
    		}
    		$("./div[@class='footer-nav']"){
    			$(".//div[@class='ad']"){
    				$("./nav"){
    					attributes(data-ur-set: "toggler")
    					$("./h3"){
    						wrap("div", class: "mw_footerButton", data-ur-toggler-component: "button")
    					}
    					$("./ul"){
    						attributes(data-ur-toggler-component: "content")
    					}
    				}
    				$("./nav[3]"){
    					attributes(style: "")
    				}
    			}
    		}
    	}
    	$("./div[@class='copyright']"){
    		$(".//div[@class='entrust']"){
    			remove()
    		}
    	}
    }
}
