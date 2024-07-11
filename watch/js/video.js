//自動再生されるだけのJS
$(document).ready(function() {
    $('.inline').on('click', function() {
        $(".inline").colorbox({
            inline: true,
            rel: 'group',
            closeButton: 'true',
            onComplete: function() {
                var video = $("#video").get(0).play();
            }
        });
    });
});



//自動再生されたあとに勝手にポップアップが閉じるJS
$(document).ready(function() {
    $('.inline').on('click', function() {
        $(".inline").colorbox({
            inline: true,
            rel: 'group',
            closeButton: 'true',
            onComplete: function() {
                var video = $("#video").get(0);

                video.play(); //動画の再生

                //動画の画面をクリックで再生・停止
                $('#cboxLoadedContent').click(function(eObj) {
                    if (video_play == true) {
                        // 再生中は停止
                        video.pause();
                        video.controls = true;
                        video_play = false;
                    } else {
                        // 停止中は再生
                        video.play();
                        video.controls = false;
                        video_play = true;
                    }
                });

                //動画が終了した時の処理
                video.addEventListener('ended', function() {
                    parent.$.colorbox.close(); //カラーボックスを閉じる
                });
            }
        });
    });
});