$(document).ready(function() 
{


   var manage_accounts_singlelocation,manage_accounts_multiplelocation, currentlyOpened = 'confirmProductTxt',
        Manage_accounts_singlelocation = {
            selectors: {
                accordian: $('.accordian'),
                accordianContent: $('.accordianContent'),
                editLink: $('.editLink'),
                disabledTextBoxs: $('.toEdit.primaryContact input[disabled="disabled"]'),
				saveBtn:$('.saveBtn'),
				cancelLink:$('.cancelLink'),
				addNewContact:$('.addNewContact'),
				orderDetails:$('.orderDetails'),
				closeOrderDetails:$('.closeOrderDetails'),
				orderDetailsContent:$('.orderDetailsContent'),
				createNewOrExist:$('input[name="createNew"]'),
				createNew:$('.createNew'),
				existingAcc:$('.existingAcc'),
				newOrExistAddr:$('.newOrExistAddr'),
				requestServiceDetailsContent:$('.requestServiceDetailsContent.accordianContent'),
				requestServiceDetailsDownArrow:$('.requestServiceDetails .accordian .upDownArrow'),
				requestServiceDetails:$('.requestServiceDetails .accordian'),
				proceedNow:$('.proceedSection .vz_btn_primary'),
				formDetail:$('.formDetail'),
				confirmProductContent:$('.confirmProduct .confirmProductContent'),
				confirmProductUpdownArrow:$('.confirmProduct .upDownArrow'),
				thanksForOrderContent:$('.thanksForOrderContent'),
				morethanaBuild:$('input[name="morethanaBuild"]'),
                dateToInstall:$('input[name="dateToInstall"]'),
				floorRoom:$('.floorRoom'),
				whichBuilding:$('.whichBuilding'),
				specialTextArea:$('.installInstrucProductContent  textarea'),
				siteAccessLeftChar:$('.siteAccessWrap .leftChar'),
				requestDateLeftChar:$('.requestDate .leftChar'),
				onoffButton:$('.onoffswitch-checkbox'),
				descriptionContent:$('.descriptionContent ul li p'),
				chooseHours:$('.chooseHours'),
				businessHours:$('.businessHours'),
				specificHours:$('.specificHours'),
                bestDateInfo:$('.bestDateInfo'),
                specificDateInfo:$('.specificDateInfo'),
                sameAsdropdown:$('.sameAsdropdown select'),
                bodyHtml:$('body')
            },
            init: function() {
                manage_accounts_singlelocation = this.selectors;
                this.bindUIActions();
            },
            bindUIActions: function() {
				Manage_accounts_singlelocation.loadPercentage();
                manage_accounts_singlelocation.accordian.on("click", function() {
                    Manage_accounts_singlelocation.additionalDetails(this);
                });

                manage_accounts_singlelocation.chooseHours.on("change", function() {
                    Manage_accounts_singlelocation.businessOrspecific(this,event);
                });
                manage_accounts_singlelocation.onoffButton.on("change", function() {
                    Manage_accounts_singlelocation.onOrOff(this,event);
                });
                manage_accounts_singlelocation.editLink.on("click", function() {
                    Manage_accounts_singlelocation.editPrimaryContact(this);
                });
				manage_accounts_singlelocation.addNewContact.on("click", function() {
                    Manage_accounts_singlelocation.showAddContacts(this);
                });
				manage_accounts_singlelocation.saveBtn.on("click", function() {
                    Manage_accounts_singlelocation.saveNewContacts(this);
                });
				manage_accounts_singlelocation.cancelLink.on("click", function() {
                    Manage_accounts_singlelocation.hideAddContacts(this,event);
                });
				manage_accounts_singlelocation.orderDetails.on("click", function() {
                    Manage_accounts_singlelocation.showOrderDetails(this,event);
                });
				manage_accounts_singlelocation.closeOrderDetails.on("click", function() {
                    Manage_accounts_singlelocation.closeOrderDetails(this,event);
                });
                manage_accounts_singlelocation.createNewOrExist.on('change',function(){
                	Manage_accounts_singlelocation.createNewOrUseExisting(this,event);
                });
                manage_accounts_singlelocation.sameAsdropdown.on('change',function(){
                    Manage_accounts_singlelocation.sameContactAs(this,event);
                });
                
                manage_accounts_singlelocation.proceedNow.on('click',function()
                {
                	Manage_accounts_singlelocation.proceedForMoreDetails(this,event);
                });
                manage_accounts_singlelocation.morethanaBuild.on('change',function(){
                	Manage_accounts_singlelocation.buildingorNonBuilding(this,event);
                });
                manage_accounts_singlelocation.dateToInstall.on('change',function(){
                    Manage_accounts_singlelocation.showDescForDate(this,event);
                });
                
                manage_accounts_singlelocation.specialTextArea.on('keyup',function(){
                	Manage_accounts_singlelocation.maxCharLeft(this,event);
                });
                manage_accounts_singlelocation.requestServiceDetails.addClass('proceedTab').removeClass('accordian');
                manage_accounts_singlelocation.requestServiceDetailsContent.slideDown("slow");
                manage_accounts_singlelocation.requestServiceDetailsDownArrow.css({'transform':'rotate('+ 180 +'deg)'});
            },
            businessOrspecific:function(currentElement,event)
            {
            	if(currentElement.value === "specific")
            	{
                    $(manage_accounts_singlelocation.businessHours).slideUp('200');
                    $(manage_accounts_singlelocation.specificHours).slideDown('200');
            	}
                else
                {
                    $(manage_accounts_singlelocation.specificHours).slideUp('200');
                    $(manage_accounts_singlelocation.businessHours).slideDown('200'); 
                }
            },

            showDescForDate:function(currentElement,event)
            {
                if((currentElement).value === "yourDate")
                {
                   $(manage_accounts_singlelocation.specificDateInfo).fadeIn('200')
                   $(manage_accounts_singlelocation.bestDateInfo).fadeOut('200');
                }
                else
                {
                 $(manage_accounts_singlelocation.specificDateInfo).fadeOut('200')
                   $(manage_accounts_singlelocation.bestDateInfo).fadeIn('200');   
                }
            },
            maxCharLeft:function(currentElement,event)
            {
            	if(currentElement.className.split(' ')[1] === 'siteAccessTxtArea')
            	{
            		manage_accounts_singlelocation.siteAccessLeftChar[0].innerHTML = (500 - $(currentElement).val().length);	
            	}
            	
            	if(currentElement.className.split(' ')[1] === 'requestDateTxtArea')
            	{
            		manage_accounts_singlelocation.requestDateLeftChar[0].innerHTML = (500 - $(currentElement).val().length);
            	}	
            },
            onOrOff:function(currentElement,event)
            {
            	if($(currentElement)[0].checked === true)
            	{
            		$(manage_accounts_singlelocation.descriptionContent).slideDown('200');
            	}
            	else
            	{
            		$(manage_accounts_singlelocation.descriptionContent).slideUp('200');
            	}
            },
            proceedForMoreDetails:function(currentElement,event)
            {
            	var count =0;
            	manage_accounts_singlelocation.requestServiceDetails.removeClass('proceedTab').addClass('accordian');
            	$(window).scrollTop(0);
            	manage_accounts_singlelocation.requestServiceDetailsContent.slideUp("slow");
            	manage_accounts_singlelocation.thanksForOrderContent.slideUp("slow");
            	manage_accounts_singlelocation.requestServiceDetailsDownArrow.css({'transform':'rotate('+ 0 +'deg)'});
            	$(manage_accounts_singlelocation.formDetail).each(function(index){$(this).delay(index * 200).fadeIn(500); count++;});
            	$(currentElement).fadeOut('500');
            	setTimeout(function(){
            		$(manage_accounts_singlelocation.confirmProductContent).slideDown('500');


                      $(manage_accounts_singlelocation.bodyHtml).animate({
                           scrollTop: $(manage_accounts_singlelocation.confirmProductContent).offset().top - 150
                       }, 'slow');




            		$(manage_accounts_singlelocation.confirmProductUpdownArrow).css({'transform':'rotate('+ 180 +'deg)'});
            	}, count * 200);

            },
            createNewOrUseExisting:function(currentElement,event)
            {
            	if(currentElement.value === 'Yes')
            	{
            		$(manage_accounts_singlelocation.createNew).slideDown(500);
            		$(manage_accounts_singlelocation.existingAcc).slideUp(500);
            	}
            	else
            	{
            		$(manage_accounts_singlelocation.existingAcc).slideDown(500);
            		$(manage_accounts_singlelocation.createNew).slideUp(500);
            	}
            },
             buildingorNonBuilding:function(currentElement,event)
            {
            	if(currentElement.value === 'No')
            	{
            		$(manage_accounts_singlelocation.floorRoom).slideDown(500);
            		$(manage_accounts_singlelocation.whichBuilding).slideUp(500);
            	}
            	else
            	{
            		$(manage_accounts_singlelocation.whichBuilding).slideDown(500);
            		$(manage_accounts_singlelocation.floorRoom).slideUp(500);
            	}
            },
			showOrderDetails:function(currentElement,event){
				manage_accounts_singlelocation.orderDetailsContent.fadeIn('300')
			},
			closeOrderDetails:function(currentElement,event){
				manage_accounts_singlelocation.orderDetailsContent.fadeOut('300')
			},
			showAddContacts:function(currentElement)
            {
				$(currentElement.parentElement.parentElement.nextElementSibling).slideDown('slow');
                $(currentElement.parentElement.parentElement.parentElement.childNodes[5]).slideUp('slow');
			},
            sameContactAs:function(currentElement,event)
            {
                if (currentElement.value === '*') 
                {
                    $(currentElement.parentElement.parentElement.nextElementSibling).slideUp('slow');    
                    $(currentElement.parentElement.parentElement.parentElement.childNodes[5]).slideUp('slow');
                }
                else
                {
                    $(currentElement.parentElement.parentElement.parentElement.childNodes[5]).slideDown('slow');
                    $(currentElement.parentElement.parentElement.nextElementSibling).slideUp('slow'); 
                }
            },
			saveNewContacts:function(currentElement){
				
			},
			hideAddContacts:function(currentElement,event){
				event.preventDefault();
				$(currentElement.parentElement.parentElement).slideUp('slow');
				console.log(currentElement.parentElement.parentElement)
			},
			loadPercentage:function(){
				$('#completionPercent').pieChart({
					barColor: '#8dd1b2',
					trackColor: '#eee',
					lineWidth: 4,
					size: 90,
					onStep: function(from, to, percent) {
						$(this.element).find('.pie-value').text(Math.round(percent));
					}
				});
			},
            additionalDetails: function(currentElement) {
            	if(currentElement.className ==="proceedTab")
            	{
            		return;
            	}
                if (currentlyOpened === currentElement.firstChild.className.split(' ')[0]) 
                {
                    $(currentElement).next().slideToggle("slow");
                    setTimeout(function(){
                            $(manage_accounts_singlelocation.bodyHtml).animate({
                                scrollTop: $(currentElement).offset().top
                                }, 'slow');
                            }, 600);
                    $(currentElement).toggleClass('currentSelectedAccordian');
					degreeVal = Manage_accounts_singlelocation.getRotationDegrees($(currentElement.children[1]));
					if(degreeVal === 0)
					{
						$(manage_accounts_singlelocation.accordian.children()).css({'transform':'rotate('+ 0 +'deg)'})
						$(currentElement.children).css({'transform':'rotate('+ 180 +'deg)'});
					}
					else
					{
						$(currentElement.children).css({'transform':'rotate('+ 0 +'deg)'});
					}
                }
                else 
                {
                    manage_accounts_singlelocation.accordianContent.slideUp("slow");
                    $(manage_accounts_singlelocation.accordian).removeClass('currentSelectedAccordian');
                    $(currentElement).next().slideDown("slow");
                        setTimeout(function(){
                            $(manage_accounts_singlelocation.bodyHtml).animate({
                                scrollTop: $(currentElement).offset().top
                            }, 'slow');
                        }, 600);
                    $(currentElement).addClass('currentSelectedAccordian');
					$(manage_accounts_singlelocation.accordian.children()).css({'transform':'rotate('+ 0 +'deg)'})
					$(currentElement.children).css({'transform':'rotate('+ 180 +'deg)'})
                }
                currentlyOpened = currentElement.firstChild.className.split(' ')[0];
 				// $("#videoIframe")[0].src += "&autoplay=0";
            },
            editPrimaryContact: function(currentElement) {
				if(currentElement.text === 'Edit')
				{
					currentElement.text = 'Save';
					manage_accounts_singlelocation.disabledTextBoxs.css({
						'box-shadow': '0px 0px 0px 1px rgb(210,211,212)',
						'background': '#fff'
					}).removeAttr('disabled');
				}
				else
				{
					currentElement.text = 'Edit';
					manage_accounts_singlelocation.disabledTextBoxs.css({
						'box-shadow': 'none',
						'background': 'none'
					}).attr('disabled','disabled');
				}
            },
			getRotationDegrees:function(obj) {
					var matrix = obj.css("-webkit-transform") ||
					obj.css("-moz-transform")    ||
					obj.css("-ms-transform")     ||
					obj.css("-o-transform")      ||
					obj.css("transform");
					if(matrix !== 'none') {
						var values = matrix.split('(')[1].split(')')[0].split(',');
						var a = values[0];
						var b = values[1];
						var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
					} else { var angle = 0; }
					return (angle < 0) ? angle + 360 : angle;
				}
        },

        manage_accounts_multiplelocation, Manage_accounts_multiplelocation=
        {
        	 selectors: 
        	 {
                selectAll: $('.selectAll .selectAllChk'),
                selectSite:$('.locations .selectSite'),
                submitOrderBtn:$('.submitOrderBtn'),
                iagree:$('.iagree'),
                errorMsgWrapper:$('.errorMsgWrapper'),
                agreeError:$('.agreeError'),
                locations:$('.multipleLocationContent .locations.pending'),
                listOfSubmittedSites:$('.listOfSubmittedSites'),
                submitSection:$('.submitSection'),
                orderIdAndCompletion:$('.orderIdAndCompletion')
             },
             init: function() 
             {
                manage_accounts_multiplelocation = this.selectors;
                this.bindUIActions();
             },
             bindUIActions: function() 
             {
				manage_accounts_multiplelocation.selectAll.on("change",function()
				{
					Manage_accounts_multiplelocation.selectAllCheckBoxes(this,event);	
			 	});
			 	manage_accounts_multiplelocation.selectSite.on("change",function()
				{
					Manage_accounts_multiplelocation.toggleSelectAll(this,event);	
			 	});
			 	manage_accounts_multiplelocation.submitOrderBtn.on("click",function()
				{
					Manage_accounts_multiplelocation.submitOrderDetails(this,event);	
			 	});
		 	 },
		 	 selectAllCheckBoxes:function(currentElement,event)
		 	 {
		 	 	$(manage_accounts_multiplelocation.selectSite).prop('checked', $(currentElement).prop("checked"));
		 	 },
		 	 toggleSelectAll:function(currentElement,event)
		 	 {
		 	 	notAllSelected = false;
		 	 	$(manage_accounts_multiplelocation.selectSite).each(function(index){
		 	 		// console.log($(manage_accounts_multiplelocation.selectSite)[index]);
		 	 		if($(manage_accounts_multiplelocation.selectSite)[index].checked === false)
		 	 		{
		 	 			notAllSelected = true;
		 	 			return false;
		 	 		}
		 	 		else
		 	 		{
		 	 			notAllSelected = false;
		 	 		}
		 	 	})
		 	 	if (!notAllSelected) 
		 	 	{
		 	 		$(manage_accounts_multiplelocation.selectAll).prop('checked', true);
		 	 	}
		 	 	else
		 	 	{
		 	 		$(manage_accounts_multiplelocation.selectAll).prop('checked', false);	
		 	 	}
		 	 },
		 	 submitOrderDetails:function(currentElement,event)
		 	 {
		 	 	if(!$(manage_accounts_multiplelocation.iagree)[0].checked)
		 	 	{
		 	 		$(manage_accounts_multiplelocation.errorMsgWrapper).slideDown("500");
		 	 		return false;
		 	 	}
		 	 	else
		 	 	{
		 	 		$(manage_accounts_multiplelocation.errorMsgWrapper).slideUp("500");
		 	 		$(manage_accounts_multiplelocation.selectSite).each(function(index)
		 	 		{
			 	 		if($(manage_accounts_multiplelocation.selectSite)[index].checked === true)
			 	 		{
			 	 			notAllSelected = true;
			 	 			return false;
			 	 		}
		 	 		})
		 	 	}
		 	 }
        }
    Manage_accounts_singlelocation.init();
    Manage_accounts_multiplelocation.init();
});