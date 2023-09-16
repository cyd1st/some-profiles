// ==UserScript==
// @name         纯净 bilibili
// @namespace    evalcony（来源）
// @version      9.9.9
// @description  bilibili净化脚本，屏蔽各种不需要的页面元素、关键字、直播、广告
// @author       evalcony
// @match        https://*.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/evalcony/better-bilibili
// ==/UserScript==

(() => {
    'use strict';
    new MutationObserver(() => {
        // 首页 屏蔽词 list
        var blackList = [
            // 首页屏蔽关键字 示例
            '对局','AI科技333',
        ];
        // 个人动态页面 屏蔽词 list
        var dynBlackList = [
            // 个人动态页屏蔽关键字 示例
            '进口',
        ];


        // 首页-直播card-类型1
        const floorCardSingleCardElement = document.querySelector('div.floor-single-card');
        if (floorCardSingleCardElement) {
            //floorCardSingleCardElement.remove();
            const badgeElement = floorCardSingleCardElement.querySelector('div.badge');
            if (badgeElement) {
                // 将 div.floor-single-card 的内容替换为 .badge 的内容
                // badge 为首页 card 左上角的标签，如 “赛事”，“直播”等。
                // 保留 badge 是为了知道屏蔽了什么东西，反正也是白块。
                // 不过好像没有效果。。。
                floorCardSingleCardElement.innerHTML = badgeElement.innerHTML;
            } else {
                floorCardSingleCardElement.remove();
            }
        }
        // 首页-直播card-类型2
        // class="bili-live-card is-rcmd"
        const liveCardElement = document.querySelector('div.bili-live-card');
        if (liveCardElement) {
            liveCardElement.remove();
        }

        // 首页-轮播栏
        // 出现在首页左边的大块轮播栏
        const swipperElement = document.querySelector('div.recommended-swipe.grid-anchor');
        if (swipperElement) {
            swipperElement.remove();
        }

        // 点赞数量标签
//         const videoCardInfoIconTextElement = document.querySelector('div.bili-video-card__info--icon-text');
//         if (videoCardInfoIconTextElement) {
//             videoCardInfoIconTextElement.remove();
//         }



        // 根据屏蔽词过滤grid
        // 暂时不需要
//         const cardInfoElementList = document.querySelectorAll('div.bili-video-card')
//         if (cardInfoElementList) {
//             var max_len = 20
//             cardInfoElementList.forEach(card => {
//                 // var links = card.getElementsByTagName('a')
//                 var videoCardInfoRight = card.querySelector('div.bili-video-card__info--right')
//                 if (videoCardInfoRight) {
//                     var links = videoCardInfoRight.getElementsByTagName('a')
//                     if (links) {
//                         for (var i = 0; i < links.length; i++) {
//                             var title = links[i].textContent || links[i].innerText;
//                             var flag = false;
//                             for (var j = 0; j < blackList.length; ++j) {
//                                 if (title.indexOf(blackList[j]) !== -1) {
//                                     console.log("屏蔽词:" + blackList[j] + " title=" + title);
//                                     flag = true;
//                                     break;
//                                 }
//                             }
//                             if (flag) {
//                                 card.remove();
//                                 break;
//                             }
//                             // 标题缩减
//                             if (title.length > max_len) {
//                                 links[i].innerHTML = title.substring(0, max_len)
//                             }
//                         }
//                     }
//                 }
//                 // 广告
//                 var svg = card.querySelector('svg.bili-video-card__info--ad')
//                 if (svg) {
//                     card.remove();
//                 }

//             })
//         }


        //--------------------------
        // 删除动态搜索栏的占位文字
        const navSearchInputElement = document.querySelector('input.nav-search-input')
        if (navSearchInputElement) {
            navSearchInputElement.removeAttribute('placeholder');
            navSearchInputElement.removeAttribute('title');
        }
        // 删除搜索历史
        const searchPanelElement = document.querySelector('div.search-panel');
        if (searchPanelElement) {
            searchPanelElement.remove();
        }
        // 菜单栏
        const leftEntryElement = document.querySelector('ul.left-entry');
        if (leftEntryElement) {
            //leftEntryElement.remove();
        }
        // 菜单栏右边
        const rightEntryVipElement = document.querySelector('a.right-entry__outside.right-entry--vip');
        if (rightEntryVipElement) {
            rightEntryVipElement.remove();
        }
        const rightEntryMessageElement = document.querySelector('li.v-popover-wrap.right-entry__outside.right-entry--message');
        if (rightEntryMessageElement) {
            rightEntryMessageElement.remove();
        }

        const headerUploadEntryElement = document.querySelector('div.header-upload-entry');
        if (headerUploadEntryElement) {
            headerUploadEntryElement.remove();
        }

        // up头像
//         const upAvatarElement = document.querySelector('div.up-avatar-wrap');
//         if (upAvatarElement) {
//             upAvatarElement.remove();
//         }
        // 充电
        const chargeBtnElement = document.querySelector('div.default-btn.new-charge-btn.charge-btn-loaded');
        if (chargeBtnElement) {
            chargeBtnElement.remove();
        }

        // //删除视频弹幕发送
        //const videoPlayerSendingElement = document.querySelector('div.bpx-player-sending-bar');
        //if (videoPlayerSendingElement) {
            //videoPlayerSendingElement.remove();
        //}

        // 投诉
//         const videoComplaintElement = document.querySelector('div.video-toolbar-right-item.toolbar-right-complaint');
//         if (videoComplaintElement) {
//             videoComplaintElement.remove();
//         }
        // 笔记
        const videoNoteElement = document.querySelector('div.video-note.video-toolbar-right-item.toolbar-right-note');
        if (videoNoteElement) {
            videoNoteElement.remove();
        }
        // share
        const videoShareBtnElement = document.querySelector('div.video-share-wrap.video-toolbar-left-item');
        if (videoShareBtnElement) {
            videoShareBtnElement.remove();
        }
        // 下方
        const leftContainerUnderPlayerElement = document.querySelector('div.left-container-under-player');
        if (leftContainerUnderPlayerElement) {
            //leftContainerUnderPlayerElement.remove();
        }
        //删除视频下方标签
        const tagWrapElement = document.querySelector('div.tag-wrap');
        if (tagWrapElement) {
            tagWrapElement.remove();
        }
        // 广告
        const adReportElement = document.querySelector('div.ad-floor-cover.b-img');
        if (adReportElement) {
            adReportElement.remove();
        }
        // 直播
        const popLivePartElement = document.querySelector('div.pop-live-small-mode.part-undefined');
        if (popLivePartElement) {
            popLivePartElement.remove();
        }
        // 评论区
        //const commentElement = document.querySelector('.comment');
        //if (commentElement) {
            //commentElement.remove();
        //}
        
        // 说明：bibili 这里做了关联，屏蔽了推荐列表，会导致选集列表数据无法展示，所以要屏蔽就都屏蔽
        // 这里改动这里的 false / true 即可
        // false: 不屏蔽
        // true: 屏蔽
        // 推荐设置为 false。
        if (false) {
            // 右侧视频选集列表
            const videoPageCardElement = document.querySelector('#multi_page');
            if (videoPageCardElement) {
                videoPageCardElement.remove();
            }
            // 右侧视频推荐列表
            const recommendListElement = document.querySelector('.recommend-list-v1');
            if (recommendListElement) {
                recommendListElement.remove();
            }
        }

        // 视频播放中出现的问题面板
        const bpxPlayerCmdDmElement = document.querySelector('.bpx-player-cmd-dm-inside');
        if (bpxPlayerCmdDmElement) {
            bpxPlayerCmdDmElement.remove();
        }

        //-------------------------- 动态

        // 个人动态
        const biliDynItemsList = document.querySelectorAll('div.bili-dyn-item__main');
        if (biliDynItemsList) {
            biliDynItemsList.forEach(item => {
                // 投票
                var voteElement = item.querySelector('.bili-dyn-card-vote__body')
                if (voteElement) {
                    console.log('屏蔽投票')
                    item.remove();
                    return;
                }

                // 预约
                var reserveElement = item.querySelector('.bili-dyn-card-reserve')
                if (reserveElement) {
                    console.log('屏蔽预约')
                    item.remove();
                    return;
                }

                // 正文
                var richTextContent = item.querySelector('div.bili-rich-text__content')
                if (richTextContent) {
                    var textElementList = richTextContent.getElementsByTagName('span')
                    if (textElementList) {
                        for (var i = 0; i < textElementList.length; i++) {
                            var text = textElementList[i].textContent || textElementList[i].innerText;
                            var flag = false;
                            for (var j = 0; j < dynBlackList.length; ++j) {
                                if (text.indexOf(dynBlackList[j]) !== -1) {
                                    console.log("包含指定字符串:" + dynBlackList[j]);
                                    flag = true;
                                    break;
                                }
                            }
                            if (flag) {
                                item.remove();
                                break;
                            }
                        }
                    }
                }
            })
        }

        // 右侧话题栏
        const rightElement = document.querySelector('.right');
        if (rightElement) {
            rightElement.remove();
        }


        // --------------- 直播间
        // 直播房间-礼物栏
        const giftControlPanelElement = document.querySelector('.gift-control-panel');
        if (giftControlPanelElement) {
            giftControlPanelElement.remove();
        }

        // 直播房间-视频下方区域
        const sectionBlockElement = document.querySelector('.section-block');
        if (sectionBlockElement) {
            sectionBlockElement.remove();
        }
        // 直播房间-视频上方信息区
        const headInfoLowerRowElement = document.querySelector('.head-info-section .lower-row');
        if (headInfoLowerRowElement) {
            headInfoLowerRowElement.remove();
        }
        // 直播房间-页面底部bilibili公司信息区域
        const linkFooterElement = document.querySelector('#link-footer-vm');
        if (linkFooterElement) {
            linkFooterElement.remove();
        }
        // 直播房间-bilibili娘
        const harunaElement = document.querySelector('.haruna-ctnr');
        if (harunaElement) {
            harunaElement.remove();
        }
        // 直播房间-pk
        const awesomePkBoxElement = document.querySelector('.awesome-pk-box');
        if (awesomePkBoxElement) {
            awesomePkBoxElement.remove();
        }
        // 直播房间-pk
        const pkProcessBoxElement = document.querySelector('.pk-process-box');
        if (pkProcessBoxElement) {
            pkProcessBoxElement.remove();
        }
        // 直播房间-pk结果
        const pkAnimationBoxElement = document.querySelector('.pk-animation-box');
        if (pkAnimationBoxElement) {
            pkAnimationBoxElement.remove();
        }
        // 直播房间-横幅特效
        const announcementElement = document.querySelector('.announcement-wrapper');
        if (announcementElement) {
            announcementElement.remove();
        }
        // 直播房间-弹幕欢迎特效
        const bubbleListElement = document.querySelector('.bubble-list');
        if (bubbleListElement) {
            bubbleListElement.remove();
        }
        // 直播房间-粉丝牌
        const fansMedalItemElement = document.querySelector('.fans-medal-item-ctnr');
        if (fansMedalItemElement) {
            fansMedalItemElement.remove();
        }
        const wealthMedalElement = document.querySelector('.wealth-medal-ctnr');
        if (wealthMedalElement) {
            wealthMedalElement.remove();
        }
        const rankIconElement = document.querySelector('.rank-icon');
        if (rankIconElement) {
            rankIconElement.remove();
        }
        const titleLabelElement = document.querySelector('.title-label');
        if (titleLabelElement) {
            titleLabelElement.remove();
        }
        // 直播房间-舰长列表
        const rankListElement = document.querySelector('#rank-list-ctnr-box');
        if (rankListElement) {
            rankListElement.remove();
        }
        // 直播房间-小游戏
        const gameElement = document.querySelector('#game-id');
        if (gameElement) {
            gameElement.remove();
        }

    }).observe(document.querySelector('body'), {
        childList: true,
        attributes: true,
        subtree: true,
    });
})();
