            function updateOutput() {

                $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + 
                $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

                document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());

            }



            $(".toggleButton").hover(function() {

                $(this).addClass("highlightButton");
            
            }, function() {

                $(this).removeClass("highlightButton");

            });     

            $(".toggleButton").click(function() {

                $(this).toggleClass("active");
                $(this).removeClass("highlightButton");
                var panelId = $(this).attr("id") + "Panel";
                $("#" + panelId).toggleClass("hidden");
                

            });
            
            $(".panel").height($(window).height() - $("#header").height()-19);
        
            $(".panel").width(($(window).width() / 2) - 10);

            updateOutput();

            // $("iframe").contents().find("html").html($("#htmlPanel").val());

            $("textarea").on("change keyup paste", function() {

                updateOutput();
                // $("iframe").contents().find("html").html($("#htmlPanel").val());
            });
        
            