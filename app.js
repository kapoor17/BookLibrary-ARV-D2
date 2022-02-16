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

    var scrolling=false;
    $(".chapter-nav").on("click",function(){
        if(!scrolling)
            scrolling=true;

        if($(this).hasClass("current-chapter"))
             return;

        var chapterId="#chapter-"+$(this).attr("data-articleId");
        var targetArticle=$(chapterId);

        $('.book-content').animate({
            scrollTop:$('.book-content').scrollTop() + $(targetArticle).position().top
        });

        $(".current-chapter").removeClass("current-chapter");
        $(this).addClass("current-chapter");

        setTimeout(()=>{
            scrolling=false;
        },2000)

        if($(targetArticle).parents(".accordion-collapse").length>0)
        {
            $(targetArticle).parents(".accordion-collapse").collapse("show");
        }
        else{
            $(".accordion-collapse").collapse("hide");
        }
        updateDots(this);
    })

    

     /*chapterNav.forEach((content,index)=>{
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




    bookChapters.forEach(chapter=>{
        var bottomCounter=0

        $(chapter).on("wheel",function(e){
            var delta = e.originalEvent.deltaY;

            if(delta>0){
                //scrolling down        
                topCounter=0;
                if(!wrapper.classList.contains("reading")&&bottomCounter==0)
                    wrapper.classList.add("reading");         
                if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                    if(bottomCounter==0){
                        if(wrapper.classList.contains("reading"))
                            wrapper.classList.remove("reading");
                        bottomCounter++;
                    }
                }
            }

            if(delta<0){
                //scrolling up 

                bottomCounter=0;
                if(wrapper.classList.contains)
                    wrapper.classList.remove("reading");

            }
            if(wrapper.classList.contains("footnote-open"))
                    closeFootnote.click();
        });
    });

    bookChapters.forEach(chapter=>{
        var bottomCounter=0;
        var topCounter=0;

        $(chapter).on("wheel",function(e){
            var delta = e.originalEvent.deltaY;

            if(delta>0){
                //scrolling down          
                topCounter=0;
                if(!wrapper.classList.contains("reading")&&bottomCounter==0)
                    wrapper.classList.add("reading");         
                if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                    if(bottomCounter==0){
                        chapterDown.click();
                        if(wrapper.classList.contains("reading"))
                            wrapper.classList.remove("reading");
                        bottomCounter++;
                    }
                }
            }

            if(delta<0){
                //scrolling up 
                bottomCounter=0;
                if(wrapper.classList.contains)
                    wrapper.classList.remove("reading");         
                if($(this).scrollTop()==0){
                    if(topCounter==0){
                        chapterUp.click();
                        if(!wrapper.classList.contains("reading"))
                        wrapper.classList.add("reading");
                        topCounter++;
                     }
                }

            }
            if(wrapper.classList.contains("footnote-open"))
                    closeFootnote.click();
        });
    });*/


    footnotes.forEach((footnote)=>{
        footnote.addEventListener("click",(e)=>{
            e.stopPropagation();
            gsap.to(".opacity-sheet-footnote",{display:"block"});
            gsap.fromTo(".foot-note-container",{display:"none",opacity:0},{display:"flex",opacity:1},"<");
        })
    })

     closeFootnote.addEventListener("click",()=>{
         gsap.to(".opacity-sheet-footnote",{display:"none"});
        gsap.to(".foot-note-container",{display:"none",opacity:0,y:25},"<");

     })
    

    function getTouches(evt) {
        return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
    }                                                     
                                                                           
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                
                                                                           
    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown )
            return;
        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;
  
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
                                                                           
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) { 
            //most significant
            if ( xDiff > 0 ) {
                //right swipe 
            } else {
                //left swipe 
            }                       
        } else {

            if ( yDiff > 0 ) {
                // down swipe 

                //bookCover 
                if(this.classList.contains("book-cover"))
                    previewButton.click();

                ///chapters
                if(this.classList.contains("chapters")){
                    wrapper.classList.add("reading");
                    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight)
                        chapterDown.click();
                    if(wrapper.classList.contains("footnote-open"))
                        closeFootnote.click();
                }
            } else { 
                // up swipe

             // chapters
              if(this.classList.contains("chapters")){
                  if(wrapper.classList.contains("reading"))
                      wrapper.classList.remove("reading");
                  if($(this).scrollTop()==0)
                      chapterUp.click();
                  if(wrapper.classList.contains("footnote-open"))
                      closeFootnote.click();
              }                  
              if(this.classList.contains("content-library")){
                  if($(this).scrollTop()==0)
                      goToTop.click();
              }
          }                                                                 
      }
       //reset values 
      xDown = null;
      yDown = null;                                             
    };


    const moveChapters=(bookContent,currentChapter,targetChapter)=>{
        if(wrapper.classList.contains("reading"))
            wrapper.classList.remove("reading");

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

    
    const updateDots=(targetNav)=>{
        const chapterTitle=$(targetNav).find(".accordion-header p").text();
        updateHeaderTitle(chapterTitle);
        return;
        alert(chapterTitle);
        targetNav.scrollIntoView(false);
    }

    const updateHeaderTitle=(targetTitle)=>{
        headerTitle.forEach(title=>{

            title.innerHTML=targetTitle;
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
                    tl.to(".book-info",{opacity:0,height:0,padding:0},"<")
                    tl.to(".content-library",{height:"100%"},"<");
                    tl.to(".sub-container-cb",{paddingTop:"0px"},"<");

                    tl.to(".title-container .book-name",{y:15},);
                    tl.to(".chapter-cover-small",{opacity:1});
                    tl.to(".title-container .chapter-title",{opacity:1,y:-30},"<");

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
                        tl.to(".book-info",{opacity:1,height:"20%",padding:"1em 0em"},"<")
                        tl.to(".content-library",{height:"80%"},"<");

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

     const isVisible = function (ele, container) {
        const eleTop = ele.offsetTop;
        const eleBottom = eleTop + ele.clientHeight;

        const containerTop = container.scrollTop;
        const containerBottom = containerTop + (container.clientHeight/2);

        // The element is fully visible in the container
        return (eleTop <= containerBottom && eleBottom > containerBottom);
        
    };

    var accordionId;

    $(".book-content").on("scroll",function(e){
        if(scrolling){
         return;
        }
        $(".chapters").each(function()
        {
            if(isVisible(this,document.querySelector(".book-content"))){
                var targetNav=document.querySelector("#chapterNav-"+$(this).attr("data-navId"));
                if($(targetNav).parents(".accordion-collapse").length>0)
                {
                    $(targetNav).parents(".accordion-collapse").collapse("show");
                }
                else{
                    $(".accordion-collapse").collapse("hide");
                }
                $(".current-chapter").removeClass("current-chapter");
                $(targetNav).addClass("current-chapter");

                updateDots(targetNav);
                
            }
        });
    })


