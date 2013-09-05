Optimizing JS Games: Hidden Classes, Inline Caches and Dictionary Mode
=======================================================================

* Speaker   : Kang-Hao (Kenny) Lu
* Email     : kanghaol@oupeng.com
* Length    : 40 minutes

Description
-----------

The main theme about this talk will be JS performance in JS games, or any JS applications in which DOM access isn't the bottleneck. As a developer of a game-targed browser engine [Shpinx](), I'd like to talk about concepts and stragies we use while optimizing games ([不江湖](http://www.bujianghu.com/), from fps 30 to 50) and canvas library (Cocos2d-html5, notably pull request [#1015](https://github.com/cocos2d/cocos2d-html5/pull/1015)).

In addition to the concepts of hidden classes and inline caches, which were already discussed in some of the excellent talks like [Vyacheslav Egorov's](http://s3.mrale.ph/nodecamp.eu/#41), this talk focuses more on [dictionary mode](https://github.com/oupengsoftware/v8/wiki/Dictionary-mode) and common ways how JS objects fall into it. Some demos of the [tools](https://github.com/oupengsoftware/cocos2d-html5/wiki/Hidden-Class) for examining these internals might also be provided.

The talk will be given in Chinese.

Notes to Potential Co-speakers and Organizers
---------------------------------------------

From my experience giving two talks about this topic. I've already noticed that the theoritcal concepts of hidden classes, inline caches and dictionary mode are difficult to grasp for the audience. If there's a chance that this stuff will be dicussed in other talks then please tell me and then I'm happy to focus on all the dark magic (including crazy hacks utilizing `new Function` and `eval`) we cast on 不江湖 and Cocos2d-html5 instead of the theories.

Also, I am never a good speaker so I welcome a co-speaker if our topics overlap. I can do the translation if needed :)

Speaker Bio
-----------

I am a Web Specialist from Opera/Oupeng, doing various different things in the Sphinx team from reporting bugs, creating demos, drafting new standards and making debugging tools. I [represent Opera/Oupeng in contributing patches to Cocos2d-html5](https://github.com/cocos2d/cocos2d-html5/blob/develop/AUTHORS.txt#L79).

I've been a listed contributor on many W3C/WHATWG specs and I was one of the founder of W3C HTML5 Chinese Interest Group, of which the main work is spec [translation](http://www.w3.org/html/ig/zh/wiki/Translation) and [contribution](http://www.w3.org/html/ig/zh/wiki/Contributions).
