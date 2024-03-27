import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as g,e as t,a as i}from"./app-otQn-0y1.js";const n={},p=t(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h1><p>git是一个开源的分布式版本控制系统</p><p>说明：</p><p><strong>workspace</strong>：工作区</p><p><strong>staging area</strong>：暂存区/缓存区</p><p><strong>local repository</strong>：版本库或本地仓库</p><p><strong>remote repository</strong>：远程仓库</p><h2 id="git基本操作" tabindex="-1"><a class="header-anchor" href="#git基本操作"><span>git基本操作</span></a></h2><p><code>git clone</code> &lt;仓库地址&gt;</p><p>拷贝一个git仓库到本地</p><p><code>git branch</code></p><p>查看本地仓库分支和远程仓库分支</p><p><code>git remote add [shortname] [url]</code></p><p>添加远程版本库（本地代码库与远程仓库建立联系）</p><p><code>git fetch</code></p><p>从远程获取代码库</p><p><code>git checkout</code> &lt;本地分支&gt;</p><p>切换本地分支</p><p><code>git pull</code> &lt;本地分支&gt;</p><p>从远程获取代码并合并本地代码版本</p><p><code>git add .</code></p><p>添加当前目录下的所有文件到缓存区</p><p><code>git commit -m [message]</code></p><p>将缓存区内容添加到本地仓库中</p><p><code>git push</code> &lt;本地分支名&gt;|&lt;远程仓库名&gt;</p><p>用于将本地分支版本上传到远程并合并</p><p><code>git pull</code>，<code>git fetch</code>的区别</p><p>git pull = git fetch + git merge</p><p><strong>一、远端跟踪分支不同</strong></p><ol><li>Git fetch：Git fetch能够直接更改远端跟踪分支。</li><li>git pull：git pull无法直接对远程跟踪分支操作，我们必须先切回本地分支然后创建一个新的commit提交。</li></ol><p><strong>二、拉取不同</strong></p><ol><li>Git fetch：Git fetch会将数据拉取到本地仓库 - 它并不会自动合并或修改当前的工作。</li><li>git pull：git pull是从远程获取最新版本并merge到本地，会自动合并或修改当前的工作</li></ol><p>##项目中git使用流程</p><p>项目初始化：</p><p>git init 项目初始化</p><p>已有项目：</p><p>将已有的项目克隆在本地</p><p>git clone &lt;仓库地址&gt;</p><p>修改文件后将文件提交到本地仓库</p><p>git add &lt;被修改的文件&gt;</p><p>git commit -m&#39;修改的信息&#39;</p><p>推送到远程仓库</p><p>git remote[选项] 设置或读取与远程仓库的内容</p><h2 id="gitignore-忽略文件版本跟踪" tabindex="-1"><a class="header-anchor" href="#gitignore-忽略文件版本跟踪"><span>gitignore-忽略文件版本跟踪</span></a></h2><p><strong>背景</strong></p><p>在项目中，并不所有文件都要进行版本追踪（如日志文件）。使用 .gitignore 是最简单配置git忽略文件版本追踪的方式。</p><p>怎么用</p><p>在 项目 根目录创建 .gitignore 文件。（注意：不一定非要放在项目根目录，这样写是为了让项目下的所有文件都生效）</p><p>用文本编辑器打开文件，进行配置：</p><p>1.<strong>每项配置独占一行。</strong></p><p><strong>2.每行的内容可以是</strong>：文件/目录 的名称、路径 或 它们的模式匹配。</p><p>.gitignore用法</p><p>3.<strong>模式匹配</strong></p><p>(1) 空行不匹配任何文件，因此常用作分隔符（以方便阅读）。</p><p>(2) # 用于注释，\\ 表示转义（如对 a!bc.txt，需改为 a!bc.txt）。</p><p>(3) * 可以匹配任何字符(0或多次)，? 可以匹配任何字符(1次)。（注意：它们都不可以匹配 / ）。</p><p>(4) / 用于分隔目录：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>（4.1） 当 / 在开头时，表示从项目根目录开始匹配。否则，下级都将匹配。

          举例：  /abc 只能匹配 /abc，不能匹配 /x/abc 或 /x/y/abc等。

   (4.2） 当 / 在末尾时，只匹配目录，否则，则同名的目录和文件都将匹配。

            举例：  /abc/ 只能匹配 /abc目录，不能匹配/abc文件。

            举例：  abc/ 能匹配 /abc/ 或 /x/abc/ 或 /x/y/abc/等，不能匹配 /abc 或 /x/abc 等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(5) 原先被排除的文件，使用 ! 模式后该文件将会重新被包含。但如果了该文件的父级目录被排除了，那么使用 ! 也不会再次被包含。</p><p>(6) [] 通常用于匹配一个字符列表，如：a[mn]z 可匹配 amz 和 anz。</p><p>(7). ** 用于匹配多级目录，如 a/**/b 可匹配 &quot;a/b&quot;, &quot;a/x/b&quot;, &quot;a/x/y/b&quot; 等 。</p><p><strong>出现的问题</strong></p><p>(1)忽略所有的内容</p><ul><li></li></ul><p>(2)忽略所有目录</p><p>*/</p><p>(3)忽略public目录下的所有文件，除了favicon.ico</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public/*

!public/favicon.ico
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4).只保留public目录下的a{一个字符}z.{后缀名}的所有文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/*

!/public/

/public/*
!/public/a?z.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,70),o=i("ol",{start:"4"},[i("li",null,[i("p",null,"ignore规则检查自己的规则是否有效"),i("blockquote",{文件或目录路径:""},[i("p",null,"git check-ignore -v")]),i("p",null,"有输出则表示这个 {文件或目录路径} 或目录是被忽略的（如下图）。"),i("figure",null,[i("img",{src:"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/08d60d09dea943a00cef13174689e5cf2d278593.jpg@942w_84h_progressive.webp",alt:"img",tabindex:"0",loading:"lazy"}),i("figcaption",null,"img")])])],-1),m=t(`<p>gitignore规则检查 5. 已有过版本追踪的文件如何忽略？</p><p>.gitignore 文件只能忽略哪些没有追踪过的文件，所以先纳入版本管理后写入.gitignore 是无效的</p><p>方法：加入gitignore -&gt; 删除本地缓存 -&gt; 重新add 。</p><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/daf45d996a2b27fe808cb23ba41413f1085c4281.jpg@464w_176h_progressive.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol start="6"><li>恢复文件的版本追踪</li></ol><p>方法：从gitignre中移除配置 -&gt; 重新 add。</p><h2 id="从版本库中恢复文件" tabindex="-1"><a class="header-anchor" href="#从版本库中恢复文件"><span>从版本库中恢复文件</span></a></h2><p><strong>出现的情况</strong></p><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230401220206600.png" alt="image-20230401220206600" style="zoom:67%;"><p><strong>情况一：没有add的</strong></p><p>直接git chekout &lt;文件路径&gt;</p><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230401220452588.png" alt="image-20230401220452588" tabindex="0" loading="lazy"><figcaption>image-20230401220452588</figcaption></figure><p><strong>情况二：有add没有commit</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git chekout commitID 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230401221051828.png"><p><strong>情况三：已经commit的文件恢复到之前版本</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git chekout &lt;commitID&gt; &lt;文件名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理"><span>分支管理</span></a></h2><p>什么是分支？</p><p>分支可以理解为当前工作目录的一个副本</p><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230401230627158.png" alt="image-20230401230627158" style="zoom:80%;"><p>分支操作</p><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230401231453282.png" alt="image-20230401231453282" tabindex="0" loading="lazy"><figcaption>image-20230401231453282</figcaption></figure><p><strong>远程分支操作，github分支管理</strong></p><p>查看本地仓库对应的远程仓库信息</p><p>git remote -v</p><p>git branch -a 显示所有分支（包括本地和远程的分支）</p><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402222029286.png" alt="image-20230402222029286" tabindex="0" loading="lazy"><figcaption>image-20230402222029286</figcaption></figure><p>推送所有分支到远程仓库</p><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402222241318.png" alt="image-20230402222241318" tabindex="0" loading="lazy"><figcaption>image-20230402222241318</figcaption></figure><p>提交一个或多个分支到远程仓库</p><p>git push 仓库名 分支名</p><p>在github上删除远程分支很简单但是会导致本地库中缓存的远程分支与实际远程分支不一致</p><p>处理方案：</p><p>1.同步远程分支：<code>git remote prune {远程仓库名称}</code></p><p>2.在本地删除远程分支：<code>git push {远程仓库名称} -d {远程分支名称}</code></p><h2 id="远程仓库关联与操作" tabindex="-1"><a class="header-anchor" href="#远程仓库关联与操作"><span>远程仓库关联与操作</span></a></h2><p>第一步创建仓库</p><p>第二步在代码托管平台创建远程仓库</p><p>与远程仓库关联后就可以提交到远程仓库了</p><p>常用的操作</p><p>git push -u origin 分支名 ：将本地分支上传并合并到远程分支记录名称为默认名称</p><p>git remote -v</p><p>git remote show 显示关联的远程仓库名称</p><p>git remote rename 旧名称 新名称</p><p>git remote remove 仓库名称 移除关联仓库</p><h2 id="项目中提交冲突与解决方案" tabindex="-1"><a class="header-anchor" href="#项目中提交冲突与解决方案"><span>项目中提交冲突与解决方案</span></a></h2><p>1.<strong>冲突一</strong>：</p><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230401234756280.png" alt="image-20230401234756280" tabindex="0" loading="lazy"><figcaption>image-20230401234756280</figcaption></figure><p><strong>提交冲突原因</strong>：</p><p>提交者的版本库 &lt; 远程库</p><p>如何实现本地同步</p><p><code>git pull </code>拉去远程分支并自动合并，合并时会创建一次提交</p><p>2.冲突二：手动解决冲突</p><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402000019667.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="提交修正" tabindex="-1"><a class="header-anchor" href="#提交修正"><span>提交修正</span></a></h2><p>应用场景：</p><ol><li>提交的代码有问题或遗漏，提交信息错误</li><li>提交日志冗长</li></ol><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>git commit --amend 	-m&#39;对上一次提交做修改&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并不会产生新的日志是纯粹对上一次提交的修改</p><h2 id="日志的高级用法" tabindex="-1"><a class="header-anchor" href="#日志的高级用法"><span>日志的高级用法</span></a></h2><p><strong>日志操作</strong></p><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402215153631.png" alt="image-20230402215153631" tabindex="0" loading="lazy"><figcaption>image-20230402215153631</figcaption></figure><ul><li><p>查询日志</p><p><code>git log</code></p></li></ul><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402215633725.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>更改日志摘要</p><p><code>git log --stat</code></p><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402220304101.png" alt="image-20230402220304101" tabindex="0" loading="lazy"><figcaption>image-20230402220304101</figcaption></figure></li><li><p>日志筛选</p></li></ul><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402220928657.png" alt="image-20230402220928657" tabindex="0" loading="lazy"><figcaption>image-20230402220928657</figcaption></figure><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402221045348.png" alt="image-20230402221045348" tabindex="0" loading="lazy"><figcaption>image-20230402221045348</figcaption></figure><p><strong>引用日志</strong></p><p><code>git reflog</code></p><p>引用日志记录了所有的更改，是当你的项目损坏时（只要提交过），它给你挽回的机会，但是它只能保存在本地仓库且默认保留90天</p><p><strong>利用日志回滚到以前版本</strong></p><p>先查询日志</p><p><code>git log</code></p><p>然后回滚到历史版本</p><p><code>git reset --hard ID号</code></p><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402225358809.png" alt="image-20230402225358809" tabindex="0" loading="lazy"><figcaption>image-20230402225358809</figcaption></figure><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402225415822.png" alt="image-20230402225415822" tabindex="0" loading="lazy"><figcaption>image-20230402225415822</figcaption></figure><h2 id="git标签管理与github创建发行版" tabindex="-1"><a class="header-anchor" href="#git标签管理与github创建发行版"><span>git标签管理与github创建发行版</span></a></h2><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402225728016.png" alt="image-20230402225728016" tabindex="0" loading="lazy"><figcaption>image-20230402225728016</figcaption></figure><p><strong>标签的操作</strong></p><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402225757545.png" alt="image-20230402225757545" tabindex="0" loading="lazy"><figcaption>image-20230402225757545</figcaption></figure><p><strong>查看标签</strong></p><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402230452090.png" alt="image-20230402230452090" tabindex="0" loading="lazy"><figcaption>image-20230402230452090</figcaption></figure><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402230554126.png" alt="image-20230402230554126" tabindex="0" loading="lazy"><figcaption>image-20230402230554126</figcaption></figure><p>github发行版</p><figure><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402231126537.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,87),c=[p,o,m];function r(s,l){return a(),g("div",null,c)}const h=e(n,[["render",r],["__file","git.html.vue"]]),b=JSON.parse('{"path":"/%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7/%E6%95%99%E7%A8%8B/git.html","title":"Git","lang":"zh-CN","frontmatter":{"description":"Git git是一个开源的分布式版本控制系统 说明： workspace：工作区 staging area：暂存区/缓存区 local repository：版本库或本地仓库 remote repository：远程仓库 git基本操作 git clone <仓库地址> 拷贝一个git仓库到本地 git branch 查看本地仓库分支和远程仓库分支 g...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Blog/%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7/%E6%95%99%E7%A8%8B/git.html"}],["meta",{"property":"og:site_name","content":"取名花光钱"}],["meta",{"property":"og:title","content":"Git"}],["meta",{"property":"og:description","content":"Git git是一个开源的分布式版本控制系统 说明： workspace：工作区 staging area：暂存区/缓存区 local repository：版本库或本地仓库 remote repository：远程仓库 git基本操作 git clone <仓库地址> 拷贝一个git仓库到本地 git branch 查看本地仓库分支和远程仓库分支 g..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/08d60d09dea943a00cef13174689e5cf2d278593.jpg@942w_84h_progressive.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"取名花光钱"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git\\",\\"image\\":[\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/08d60d09dea943a00cef13174689e5cf2d278593.jpg@942w_84h_progressive.webp\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/daf45d996a2b27fe808cb23ba41413f1085c4281.jpg@464w_176h_progressive.webp\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230401220452588.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230401231453282.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402222029286.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402222241318.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230401234756280.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402000019667.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402215153631.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402215633725.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402220304101.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402220928657.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402221045348.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402225358809.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402225415822.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402225728016.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402225757545.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402230452090.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402230554126.png\\",\\"https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20230402231126537.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"取名花光钱\\",\\"url\\":\\"https://molimamcc.github.io/Blog/\\"}]}"]]},"headers":[{"level":2,"title":"git基本操作","slug":"git基本操作","link":"#git基本操作","children":[]},{"level":2,"title":"gitignore-忽略文件版本跟踪","slug":"gitignore-忽略文件版本跟踪","link":"#gitignore-忽略文件版本跟踪","children":[]},{"level":2,"title":"从版本库中恢复文件","slug":"从版本库中恢复文件","link":"#从版本库中恢复文件","children":[]},{"level":2,"title":"分支管理","slug":"分支管理","link":"#分支管理","children":[]},{"level":2,"title":"远程仓库关联与操作","slug":"远程仓库关联与操作","link":"#远程仓库关联与操作","children":[]},{"level":2,"title":"项目中提交冲突与解决方案","slug":"项目中提交冲突与解决方案","link":"#项目中提交冲突与解决方案","children":[]},{"level":2,"title":"提交修正","slug":"提交修正","link":"#提交修正","children":[]},{"level":2,"title":"日志的高级用法","slug":"日志的高级用法","link":"#日志的高级用法","children":[]},{"level":2,"title":"git标签管理与github创建发行版","slug":"git标签管理与github创建发行版","link":"#git标签管理与github创建发行版","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.38,"words":1915},"filePathRelative":"构建工具/教程/git.md","excerpt":"\\n<p>git是一个开源的分布式版本控制系统</p>\\n<p>说明：</p>\\n<p><strong>workspace</strong>：工作区</p>\\n<p><strong>staging area</strong>：暂存区/缓存区</p>\\n<p><strong>local repository</strong>：版本库或本地仓库</p>\\n<p><strong>remote repository</strong>：远程仓库</p>\\n<h2>git基本操作</h2>\\n<p><code>git clone</code> &lt;仓库地址&gt;</p>\\n<p>拷贝一个git仓库到本地</p>\\n<p><code>git branch</code></p>","autoDesc":true}');export{h as comp,b as data};
