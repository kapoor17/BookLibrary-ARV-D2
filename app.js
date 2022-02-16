//dom objects

    //accordion-wrapper objects

    //const accordionCover=document.querySelector("#accordion-cover");
    //const previewButton=accordionCover.querySelector(".preview-button");

    //const goToTop=accordionCover.querySelector(".go-back");
    const wrapper=document.querySelector(".wrapper")
    const contentlibrary=document.querySelector(".content-library");
    const chapterNav = document.querySelectorAll(".chapter-nav");
    const menuBtn=document.querySelector(".menu-btn");
    
    //main-book objects

    const mainBook=document.querySelector(".main-book");

    //const bookCover = accordionCover.querySelector(".book-cover");
    //const returnButton=mainBook.querySelector(".return");
    const headerTitle=document.querySelectorAll(".chapter-title");
    
    const bookContents=mainBook.querySelectorAll(".book-content");
    const bookContent=mainBook.querySelector(".book-content");
    const bookChapters = Array.from(bookContent.children);

    const footnotes = mainBook.querySelectorAll(".footnote")
    
    //const footer = mainBook.querySelector(".footer");
    // const controls = footer.querySelector(".controls");
     //const arrows = mainBook.querySelector(".arrows");
     //const chapterUp=footer.querySelector(".chapter-up");
     //const chapterDown=footer.querySelector(".chapter-down");
     const closeFootnote = document.querySelector(".close-footnote");
    // const footnoteContainer = footer.querySelector(".foot-notes")

//values from dom
    var loggedIn=false;
    var xDown = null;                                                        
    var yDown = null;


//events
    /*bookCover.addEventListener('touchstart', handleTouchStart, false);        
    bookCover.addEventListener('touchmove', handleTouchMove, false);

    $(".book-cover").on("wheel",function(e){
        var delta = e.originalEvent.deltaY;
        if(delta>0)
            previewButton.click();
    });

    previewButton.addEventListener("click",()=>{
        accordionCover.classList.add("variable-height-class");
        setTimeout(() => {
            goToTop.classList.add("fixed");
        }, 750);
    })

    contentlibrary.addEventListener('touchstart', handleTouchStart, false);        
    contentlibrary.addEventListener('touchmove', handleTouchMove, false);

    $(contentlibrary).on("wheel",function(e){
        var delta = e.originalEvent.deltaY;
        var topCounter=0;
        if(delta<0){
            
            if($(this).scrollTop()==0){
                if(topCounter==0){
                    goToTop.click();
                    topCounter++;
                }
            }
        }
    });

    goToTop.addEventListener("click",()=>{
        goToTop.classList.remove("fixed");
        setTimeout(() => {
            $(".accordion-collapse.show").removeClass("show");
            accordionCover.classList.remove("variable-height-class");
        }, 300);
    })*/


    
    chapterNav.forEach((content,index)=>{
        content.addEventListener("click",()=>{
            if(content.classList.contains("with-preview")){               
                const currentNav= contentlibrary.querySelector(".current-chapter")
                if(currentNav)
                    currentNav.classList.remove("current-chapter");
                
                const chapterTitle=content.querySelector(".accordion-header p");
                updateHeaderTitle(chapterTitle);
                
                content.classList.add("current-chapter");

                window.history.pushState({id:1},null,"");

                const currentChapter =  bookContent.querySelector(".current-chapter");
                const targetChapter = bookChapters[index];

                moveChapters(bookContent, currentChapter, targetChapter);

            }
        })
    })
    
    /*returnButton.addEventListener("click",()=>{
        mainBook.classList.remove("slide-main-book-in");
        if(mainBook.classList.contains("footnote-open"))
            closeFootnote.click();
    })*/
/*
    chapterDown.addEventListener("click",()=>{
        const currentChapter=bookContent.querySelector(".current-chapter");
        const nextChapter=currentChapter.nextElementSibling;

        const currentNav= contentlibrary.querySelector(".current-chapter");
        var nextNav=currentNav.nextElementSibling;

        if(!nextNav){
            var nextNavContainer=currentNav.closest("div.with-sub-chapters");
            nextNav=nextNavContainer.nextElementSibling;
            nextNavContainer.querySelector(".accordion-collapse").classList.remove("show")
        }

        if(nextNav.classList.contains("with-sub-chapters")){
            var nextNavContainer=nextNav.querySelector(".inner-accordion");
            
            nextNav=nextNavContainer.firstElementChild;
            nextNavContainer.closest("div.accordion-collapse").classList.add("show")
        }

        moveChapters(bookContent,currentChapter,nextChapter);
        updateDots(currentNav,nextNav);

        nextNav.scrollIntoView(false);

        
    })

    chapterUp.addEventListener("click",()=>{
        const currentChapter=bookContent.querySelector(".current-chapter");
        const prevChapter=currentChapter.previousElementSibling;

        const currentNav= contentlibrary.querySelector(".current-chapter");
        var nextNav=currentNav.previousElementSibling;

        if(!nextNav){
            var nextNavContainer=currentNav.closest("div.with-sub-chapters");
            nextNav=nextNavContainer.previousElementSibling;
            nextNavContainer.querySelector(".accordion-collapse").classList.remove("show")

        }

        if(nextNav.classList.contains("with-sub-chapters")){
            var nextNavContainer=nextNav.querySelector(".inner-accordion");
            
            nextNav=nextNavContainer.lastElementChild;
            nextNavContainer.closest("div.accordion-collapse").classList.add("show")
        }

        moveChapters(bookContent,currentChapter,prevChapter);
        updateDots(currentNav,nextNav);

        nextNav.scrollIntoView(false);

        
    }) */


    // bookChapters.forEach(chapter=>{
    //     var bottomCounter=0

    //     $(chapter).on("wheel",function(e){
    //         var delta = e.originalEvent.deltaY;

    //         if(delta>0){
    //             //scrolling down        
    //             topCounter=0;
    //             if(!wrapper.classList.contains("reading")&&bottomCounter==0)
    //                 wrapper.classList.add("reading");         
    //             if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
    //                 if(bottomCounter==0){
    //                     if(wrapper.classList.contains("reading"))
    //                         wrapper.classList.remove("reading");
    //                     bottomCounter++;
    //                 }
    //             }
    //         }

    //         if(delta<0){
    //             //scrolling up 

    //             bottomCounter=0;
    //             if(wrapper.classList.contains)
    //                 wrapper.classList.remove("reading");

    //         }
    //         if(wrapper.classList.contains("footnote-open"))
    //                 closeFootnote.click();
    //     });
    // });

    // bookChapters.forEach(chapter=>{
    //     var bottomCounter=0;
    //     var topCounter=0;

    //     $(chapter).on("wheel",function(e){
    //         var delta = e.originalEvent.deltaY;

    //         if(delta>0){
    //             //scrolling down 
                
    //             topCounter=0;
    //             if(!wrapper.classList.contains("reading")&&bottomCounter==0)
    //                 wrapper.classList.add("reading");
                
    //             if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
    //                 if(bottomCounter==0){
    //                     chapterDown.click();
    //                     if(wrapper.classList.contains("reading"))
    //                         wrapper.classList.remove("reading");
    //                     bottomCounter++;
    //                 }
    //             }
    //         }

    //         if(delta<0){
    //             //scrolling up 
    //             bottomCounter=0;
    //             if(wrapper.classList.contains)
    //                 wrapper.classList.remove("reading");
                
    //             if($(this).scrollTop()==0){
    //                 if(topCounter==0){
    //                     chapterUp.click();
    //                     if(!wrapper.classList.contains("reading"))
    //                     wrapper.classList.add("reading");
    //                     topCounter++;
    //                  }
    //             }

    //         }
    //         if(wrapper.classList.contains("footnote-open"))
    //                 closeFootnote.click();
    //     });
    // });


    // bookChapters.forEach(chapter=>{
    //     chapter.addEventListener("click",function(){
    //             wrapper.classList.toggle("reading");
    //             if(wrapper.classList.contains("footnote-open"))
    //                 closeFootnote.click();
    //     });
    //     //chapter.addEventListener('touchstart', handleTouchStart, false);        
    //     //chapter.addEventListener('touchmove', handleTouchMove, false);
    // })

    footnotes.forEach((footnote)=>{
        footnote.addEventListener("click",(e)=>{
            e.stopPropagation();
            gsap.to(".opacity-sheet-footnote",{display:"block"});
            gsap.fromTo(".foot-note-container",{display:"none",opacity:0},{display:"block",opacity:1},"<");
        })
    })

     closeFootnote.addEventListener("click",()=>{
         gsap.to(".opacity-sheet-footnote",{display:"none"});
        gsap.to(".foot-note-container",{display:"none",opacity:0,y:25},"<");

     })
    

//functinons
    // function getTouches(evt) {
    //     return evt.touches ||             // browser API
    //     evt.originalEvent.touches; // jQuery
    // }                                                     
                                                                           
    // function handleTouchStart(evt) {
    //     const firstTouch = getTouches(evt)[0];                                      
    //     xDown = firstTouch.clientX;                                      
    //     yDown = firstTouch.clientY;                                      
    // };                                                
                                                                           
    // function handleTouchMove(evt) {
    //     if ( ! xDown || ! yDown )
    //         return;
  
    //     var xUp = evt.touches[0].clientX;                                    
    //     var yUp = evt.touches[0].clientY;
  
    //     var xDiff = xDown - xUp;
    //     var yDiff = yDown - yUp;
                                                                           
    //     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
    //         if ( xDiff > 0 ) {
    //             /* right swipe */
    //         } else {
    //             /* left swipe */
    //         }                       
    //     } else {

    //         if ( yDiff > 0 ) {
    //             ///* down swipe */

    //             ///*bookCover *?
    //             if(this.classList.contains("book-cover"))
    //                 previewButton.click();

    //             ///*chapters
    //             if(this.classList.contains("chapters")){
    //                 wrapper.classList.add("reading");
    //                 if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight)
    //                     chapterDown.click();
    //                 if(wrapper.classList.contains("footnote-open"))
    //                     closeFootnote.click();
    //             }
    //         } else { 
    //             ///* up swipe*/

    //            // /*chapters*
    //             if(this.classList.contains("chapters")){
    //                 if(wrapper.classList.contains("reading"))
    //                     wrapper.classList.remove("reading");
    //                 if($(this).scrollTop()==0)
    //                     chapterUp.click();
    //                 if(wrapper.classList.contains("footnote-open"))
    //                     closeFootnote.click();
    //             }                  
    //             if(this.classList.contains("content-library")){
    //                 if($(this).scrollTop()==0)
    //                     goToTop.click();
    //             }
    //         }                                                                 
    //     }
    //      //reset values 
    //     xDown = null;
    //     yDown = null;                                             
    //   };


    const moveChapters=(bookContent,currentChapter,targetChapter)=>{
        if(wrapper.classList.contains("reading"))
            wrapper.classList.remove("reading");

        console.log(targetChapter.dataset.scrollHeight);
        bookContent.scrollTo(0,targetChapter.dataset.scrollHeight)
        currentChapter.classList.remove("current-chapter");
        targetChapter.classList.add("current-chapter");
    }

    var scrollpos=0;
    const setBookPosition=(bookChapters,index)=>{
        bookChapters.setAttribute("data-scroll-height", 0);
        if(index>=1){
            scrollpos+=bookChapters.getBoundingClientRect().height;
            bookChapters.setAttribute("data-scroll-height", scrollpos);
        }
    };
    bookChapters.forEach(setBookPosition);

    
    const updateDots=(currentNav,targetNav)=>{
        const chapterTitle=targetNav.querySelector(".accordion-header p")
        updateHeaderTitle(chapterTitle);

        if(currentNav)
            currentNav.classList.remove("current-chapter");
        if(targetNav)
            targetNav.classList.add("current-chapter")
    }

    const updateHeaderTitle=(targetTitle)=>{
        headerTitle.forEach(title=>{

            title.innerHTML=targetTitle.innerHTML;
        })
    }
    
    function detectHistory(){
       returnButton.click();
    }
    
    window.addEventListener("popstate",detectHistory);

    let menuOpen=false;

    const burgerMenu=()=>{
        menuBtn.addEventListener("click",()=>{
            if(!menuOpen){
                menuBtn.classList.remove("open");
                menuOpen=true;
                wrapper.querySelector(".content-library-container").classList.add("closed")
            }
            else{
                menuBtn.classList.add("open");
                menuOpen=false;
                wrapper.querySelector(".content-library-container").classList.remove("closed"); 
            }
        })
    }

    burgerMenu();

    bookContents.forEach((content,index)=>{
        var bottomCounter=0;      
        var topCounter=0;      
        const tl=gsap.timeline({
            defaults:{duration:0.5,ease:"Power2.in"},
        });
    
         $(content).on("wheel",function(e){
            var delta = e.originalEvent.deltaY;
    
            if(delta>0){
                //scrolling down 
                topCounter=0;
                let titleHeigth="10vh";
          
                if(bottomCounter==0){
                    tl.to(".header",{opacity:0});
                    tl.to(".chapter-cover",{opacity:0},"<");
                    tl.to(".title-container",{height:titleHeigth},"<");
                    
                    tl.to(".content-container",{y:"-17.5%"});
                    tl.to(".sub-container-cb",{paddingTop:"0px"},"<");

                    tl.to(".title-container .book-name",{y:-15},);
                    tl.to(".chapter-cover-small",{opacity:1});
                    tl.to(".title-container .chapter-title",{opacity:1},"<");

                    bottomCounter++;
                }
            }
    
            if(delta<0){
                 //scrolling up 

                 bottomCounter=0
                 let titleHeigth="8vh"
                 
                 if($(this).scrollTop()==0){
                     if(topCounter==0){
                        // document.documentElement.style.setProperty("--cover-image-height","270px")
                        tl.to(".title-container .chapter-title",{opacity:0});
                        tl.to(".chapter-cover-small",{opacity:0},"<");
                        tl.to(".title-container",{height:titleHeigth},"<");
                        tl.to(".content-container",{y:"0px"});
                        tl.to(".sub-container-cb",{paddingTop:"85px"},"<");


                        tl.to(".title-container .book-name",{y:0});
                        tl.to(".header",{opacity:1},"<");
                        tl.to(".chapter-cover",{opacity:1},"<");
                        topCounter++;
                    }
                }
    
            }
         });
     });

        bookChapters.forEach((chapter,index)=>{
            var bottomCounter=0;      
            var topCounter=0;

            $(bookContent).on("wheel",function(e){
                var delta = e.originalEvent.deltaY;
        
                
                if(delta>0){

                    if(bottomCounter==0){
                        
                        if(bookContent.scrollTop>chapter.dataset.scrollHeight&&(bookContent.scrollTop<=bookContent.scrollHeight||bookContent.scrollTop<chapter.nextElementSibling.dataset.scrollHeight)&&index>=1){
                            const currentNav= contentlibrary.querySelector(".current-chapter");
                            var nextNav=currentNav.nextElementSibling;
    
                            if(!nextNav){
                                var nextNavContainer=currentNav.closest("div.with-sub-chapters");
                                nextNav=nextNavContainer.nextElementSibling;
                                nextNavContainer.querySelector(".accordion-collapse").classList.remove("show")
                            }
    
                            if(nextNav.classList.contains("with-sub-chapters")){
                                var nextNavContainer=nextNav.querySelector(".inner-accordion");
    
                                nextNav=nextNavContainer.firstElementChild;
                                nextNavContainer.closest("div.accordion-collapse").classList.add("show")
                            }
                            
                            updateDots(currentNav,nextNav);
                            bottomCounter++;
                            console.log("changed",index);

                        }
                    }


                }
        
                if(delta<0){

                    if(topCounter==0){
                        index--;
                        chapter=chapter.previousElementSibling;

                        if(bookContent.scrollTop<chapter.dataset.scrollHeight&&(bookContent.scrollTop<=bookChapters[0].dataset.scrollHeight||bookContent.scrollTop>chapter.previousElementSibling.dataset.scrollHeight)&&index>=1){
                            const currentNav= contentlibrary.querySelector(".current-chapter");
                            var nextNav=currentNav.previousElementSibling;
    
                            if(!nextNav){
                                var nextNavContainer=currentNav.closest("div.with-sub-chapters");
                                nextNav=nextNavContainer.previousElementSibling;
                                nextNavContainer.querySelector(".accordion-collapse").classList.remove("show")
                             }
    
                            if(nextNav.classList.contains("with-sub-chapters")){
                                var nextNavContainer=nextNav.querySelector(".inner-accordion");
    
                                nextNav=nextNavContainer.lastElementChild;
                                nextNavContainer.closest("div.accordion-collapse").classList.add("show")
                            }
                            
                            updateDots(currentNav,nextNav);
                            topCounter++;
                            console.log("changed",index);

                        }
                    }



                }
             });
        })




