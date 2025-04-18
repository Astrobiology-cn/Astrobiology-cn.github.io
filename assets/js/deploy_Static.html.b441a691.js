"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[5888],{36995:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,n]of i)a[s]=n;return a}},67573:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>l,data:()=>t});var n=a(6254);const e={},l=(0,a(36995).A)(e,[["render",function(s,i){const a=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[i[13]||(i[13]=(0,n.Fv)('<h2 id="静态托管" tabindex="-1"><a class="header-anchor" href="#静态托管"><span>静态托管</span></a></h2><p>如果在国内静态资源库找不到所需的静态包，建议使用 <code>npm i</code> 命令将其下载到本地，然后部署到阿里云/七牛云的国内服务器上，以避免因 UNPKG 和 jsDelivr 等静态节点被屏蔽而导致网页样式显示出错。</p><p>静态资源库：</p><ul><li><a href="https://www.staticfile.org/" target="_blank" rel="noopener noreferrer">Staticfile CDN</a>：国内维护最稳定的 CDN。</li><li><a href="https://cdn.bytedance.com/" target="_blank" rel="noopener noreferrer">字节 CDN</a>：测速表现不错，缓存过期时间最长设置一年，而自 2022 年 3 月起，静态资源已不再更新。</li></ul><p>emoji 等可以使用静态资源库上的项目，比如 twemoji，上面有集成 png 图片。</p><h3 id="npm-包" tabindex="-1"><a class="header-anchor" href="#npm-包"><span>NPM 包</span></a></h3><ul><li>UNPKG：<strong>有墙风险且不稳定</strong>，默认为最新版本，无需 <code>@latest</code> 标签。 <ul><li>将静态文件发布为 npm 包，参考<a href="https://segmentfault.com/a/1190000023075167" target="_blank" rel="noopener noreferrer">一分钟教你发布 npm 包</a>。</li><li>加速：在 <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm 官方源</a>中搜索包位置，然后使用前缀 <code>https://unpkg.com/</code>。</li></ul></li><li><a href="https://npmmirror.com/" target="_blank" rel="noopener noreferrer">NPM MIRROR</a>：NPM 项目的国内镜像镜像，不能做静态托管用途。<code>https://registry.npmmirror.com/项目名/版本号</code> 可以看见项目的各种信息，但看不了里面的文件。</li><li>UNPKG 镜像：有资源可以用服务器自建服务，反向代理 unpkg。 <ul><li><s>饿了么 CDN（已关）：国内唯一能用的 npm 镜像，2022.07.13 发现外部访问被拒绝。之前饿了么并没说支持对外，可能已经彻底取消了。使用饿了么 CDN 时，注意 <code>https://npm.elemecdn.com/react@latest/</code> 需要时间更新，具体频率未知，可固定大版本号来获取更新 <code>https://npm.elemecdn.com/react@^18/</code>。</s></li></ul></li><li>GitHub：基于 GitHub 公共仓库的资源托管，资源不会失效，但有时需要根据 CDN 服务商而更换域名。 <ul><li><s><a href="https://statically.io/" target="_blank" rel="noopener noreferrer">Statically</a>：jsDeliver 的替代品，在中国大陆所有地区连接异常。</s></li><li><s>jsDelivr（已墙）：速度最快，原本是最稳的，但域名暴雷后，经常断开，2022.06.01 彻底打不开。配合 Github action，更新后自动访问 jsdelivr CDN 缓存刷新链接，保持页面常新。刷新命令参考 <code>curl https://purge.jsdelivr.net/gh/username/project/file</code>。</s></li></ul></li></ul><p>由于第三方托管过于不稳定，目前我使用自托管 oss.newzone.top。</p><h3 id="部署平台" tabindex="-1"><a class="header-anchor" href="#部署平台"><span>部署平台</span></a></h3>',9)),(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[i[3]||(i[3]=(0,n.eW)("Cloudflare 提供了 Pages 和 Workers 两种部署方式： ")),(0,n.Lk)("ul",null,[i[2]||(i[2]=(0,n.Lk)("li",null,[(0,n.eW)("Pages 部署简便，访问速度在海外较快，但在国内可能存在不稳定情况。同时，page.dev 域名有时可能会遭到屏蔽。为此，你可以选择购买一年期的低成本临时域名以规避此问题。若通过 Git 仓库部署页面，需根据 "),(0,n.Lk)("a",{href:"https://developers.cloudflare.com/pages/configuration/language-support-and-tools/",target:"_blank",rel:"noopener noreferrer"},"Cloudflare 语言支持及工具"),(0,n.eW)("指南调整部署环境变量。例如，若使用 yarn 作为构建工具，默认版本为 Yarn 3.6.3，你可能需要手动更改为"),(0,n.Lk)("code",null,"YARN_VERSION 1.22.21"),(0,n.eW)("。")],-1)),(0,n.Lk)("li",null,[(0,n.bF)(a,{to:"/deploy/Cloudflare.html#%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86"},{default:(0,n.k6)((()=>i[0]||(i[0]=[(0,n.eW)("Workers")]))),_:1}),i[1]||(i[1]=(0,n.eW)("：复制镜像网站，可直接访问，但反向代理稳定性成疑。"))])])]),i[4]||(i[4]=(0,n.Lk)("li",null,"Netlify：国内速度慢点，图片容易卡死，但还算稳定。",-1)),i[5]||(i[5]=(0,n.Lk)("li",null,"Vercel：推荐使用 GitHub 账户登录，需绑定手机号（不支持 Voice），支持国内手机号。2022.08.26，「*.vercel.app」域名被 DNS 污染，需要绑定自定义域名。",-1)),i[6]||(i[6]=(0,n.Lk)("li",null,"AWS: 邮箱注册，不过需要信用卡认证。",-1)),i[7]||(i[7]=(0,n.Lk)("li",null,"国内平台：Gitee、WuliHub、CODING，都需要实名认证。",-1))]),i[14]||(i[14]=(0,n.Fv)('<h3 id="ipfs" tabindex="-1"><a class="header-anchor" href="#ipfs"><span>IPFS</span></a></h3><p>IPFS 无需服务器就可建立静态网站，号称永不失效，但<strong>国内稳定性成疑问，实用性一般</strong>。IPFS 托管在一个网关上，并不会自动复制到所有网关。</p><p><a href="https://pinata.cloud/" target="_blank" rel="noopener noreferrer">pinata</a> 上传网站构建的目录文件夹，上传后，即可通过 IPFS Hash 访问。网站目录中必须有 index.html，否则网页中将显示网站目录。即使有 index.html，其他人在拥有 CID 后，可以通过 IPFS Desktop 来获取网站的完整目录。为确保私密性，建议只上传单文件。使用单文件 CID 视为单一网站，不可调用原目录中的文件。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>上传 ipfs 到 pinata 之后，cloudflare 等其他网关不一定会完全复制文件，php 无法抓取加载，所以不建议使用 cloudflare 网关。</p><p>cloudflare 接管 pinata 后，ipfs 域名需通过「pinata 托管」&gt;「cloudflare DNS」&gt;「cloudflare SSL」。如果中途将 DNS 指向 <code>http://gateway.pinata.cloud</code> 等非 cloudflare ipfs 网关域名，cloudflare SSL 证书将失效。即便把链接改为非加密的 http，pinata 依然会视之为无效链接而拒绝访问。</p><p>对于文件较少且链接有效的域名，可按 <a href="https://www.cloudflare.com/zh-cn/distributed-web-gateway/" target="_blank" rel="noopener noreferrer">Cloudflare IPFS</a> 页面说明来设置 DNS，提交 IPFS 域名 30 分钟后，即可获取 SSL 证书。</p><ol><li>添加 CNAME 记录，将你的 IPFS 域名 <code>xxx.example.com</code> 指向 <code>cloudflare-ipfs.com</code>。</li><li><code>_dnslink.xxx.example.com</code> 设置为 <code>dnslink=/ipfs/&lt;your_ipfs_hash_here&gt;</code>。</li></ol><h2 id="github-同步到-vps" tabindex="-1"><a class="header-anchor" href="#github-同步到-vps"><span>GitHub 同步到 VPS</span></a></h2><p>代码、文章推送到 GitHub 后，会自动生成可访问的网页，但国内访问 GitHub Pages 的速度极不稳定，为了确保网站能被正常访问，必须增加国内的访问节点。</p><p>很多人选择 Gitee Pages 作为国内节点，GitHub Actions 将新文档同步到 Gitee，生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 的限制非常多，免费版无法自定义域名，必须实名验证，更别提近期的下架风波。因此，我没选 Gitee，而是把文档同步到国内服务器（域名需备案）。</p><div class="hint-container tip"><p class="hint-container-title">文件夹名称请勿使用大写字母，否则在同步时容易产生错误。</p></div><h3 id="同步到-ftp" tabindex="-1"><a class="header-anchor" href="#同步到-ftp"><span>同步到 FTP</span></a></h3>',12)),(0,n.Lk)("p",null,[i[9]||(i[9]=(0,n.eW)("如果你有 FTP 服务器，可使用 ")),i[10]||(i[10]=(0,n.Lk)("a",{href:"https://github.com/SamKirkland/FTP-Deploy-Action",target:"_blank",rel:"noopener noreferrer"},"FTP-Deploy-Action",-1)),i[11]||(i[11]=(0,n.eW)(" 将 github 代码推送到服务器上。Actions 步骤参考 ")),(0,n.bF)(a,{to:"/deploy/GitHub.html"},{default:(0,n.k6)((()=>i[8]||(i[8]=[(0,n.eW)("GitHub 说明")]))),_:1}),i[12]||(i[12]=(0,n.eW)("。"))]),i[15]||(i[15]=(0,n.Fv)('<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">on:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 🚀</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Deploy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> website</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">jobs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  web-deploy:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 🎉</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Deploy</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    runs-on:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ubuntu-latest</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    steps:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 🚚</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> code</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      uses:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> actions/checkout@v3</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 📂</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Sync</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> files</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      uses:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SamKirkland/FTP-Deploy-Action@4.3.3</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      with:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        server:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ${{ secrets.ftp_host }}</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        username:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ${{ secrets.ftp_username }}</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        password:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ${{ secrets.ftp_password }}</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        port:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ${{ secrets.ftp_port }}</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 建议更改默认的 21 端口</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 FTP 时，需在云服务商的安全组和服务器上开放 FTP 端口，并临时暂停宝塔系统加固等安全插件（新建 FTP 容易与安全插件冲突）。</p><p>如果出现 <code>FTPError: 530 Login authentication failed</code>，则说明 FTP 密码错误或账号不存在，需用 FileZilla 测试 FTP 的有效性。确认 FTP 无效后，检查 FTP 密码是否填写正确，是否只有大小写字母和数字。如果密码错误，则在 github secrets 重新 update 密钥。如果密码正确，则进入 <code>/www/server/pure-ftpd/etc/pureftpd.passwd</code>，检查是否有该 FTP 账户。没有 FTP 账户的话，<strong>暂停宝塔系统加固</strong>等安全插件后，重新新建 FTP。</p><p>如果出现 <code>Error: Timeout (control socket)</code>，则说明同步服务器超时，可进入 Actions 页面点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭防火墙，测试是否 GitHub 服务器被拉黑了。</p><h3 id="ssh-同步" tabindex="-1"><a class="header-anchor" href="#ssh-同步"><span>SSH 同步</span></a></h3><p>如果你有服务器的 SSH 权限，可以使用 <a href="https://github.com/SamKirkland/web-deploy" target="_blank" rel="noopener noreferrer">web-deploy</a> 以 SSH 同步方式发布页面。但与 FTP 相比，不确定安全性、速度、时间是否会区别。我尝试连接一直报错 <code>Permission denied (publickey,password)</code>。（有可能是服务器需要非 root 用户，adduser 一直加不上。）</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">on:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Publish</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Website</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">jobs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  web-deploy:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 🚀</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Deploy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Website</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Every</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Commit</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    runs-on:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ubuntu-latest</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    steps:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 🚚</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Code</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      uses:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> actions/checkout@v3</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 📂</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Sync</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Files</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      uses:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SamKirkland/web-deploy@v1</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      with:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        source-path:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docs/.vuepress/dist/</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        target-server:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ${{ secrets.host }}</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        remote-user:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ${{ secrets.ssh_username }}</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        private-ssh-key:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ${{ secrets.SSH_KEY }}</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        destination-path:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ${{ secrets.destination_folder }}</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        ssh-port:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ${{ secrets.ssh_port }}</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 建议更改默认的 22 端口</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果出现报错 <code>error in libcrypto</code>，说明 SSH 密钥错误，需要登陆服务器终端，运行以下命令。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ssh-keygen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PEM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rsa</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 4096</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> id_rsa.pub</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">authorized_keys</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> id_rsa</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同步到-oss" tabindex="-1"><a class="header-anchor" href="#同步到-oss"><span>同步到 oss</span></a></h3><p>如果没有服务器，可以把文件部署在云运营商的云存储上。比如用 <a href="https://github.com/marketplace/actions/aliyun-oss-website-action" target="_blank" rel="noopener noreferrer">aliyun-oss-website-action</a>，将 repo 文件 build 成网站文件，然后同步到阿里云 oss 并运行网站。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> deploy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> md</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> oss</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">on:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  push:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    branches:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;main&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  pull_request:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    branches:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;main&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ]</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">jobs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  build:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    runs-on:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ubuntu-latest</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    steps:</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # load repo to /github/workspace</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uses:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> actions/checkout@v3</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Node.js</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      uses:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> actions/setup-node@v3</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      with:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        node-version:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;14.x&#39;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 打包文档命令</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # - run: npm install yarn@1.22.4 -g</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # - run: yarn install</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # - run: yarn docs:build #需要配合 yarn 的 package.json</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> aliyun-oss-website-action</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      uses:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fangbinwei/aliyun-oss-website-action@v1.3.0</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      with:</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">          accessKeyId:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ${{ secrets.ACCESS_KEY_ID }}</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">          accessKeySecret:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ${{ secrets.ACCESS_KEY_SECRET }}</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">          bucket:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> learndata-notes</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # use your own endpoint</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">          endpoint:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> oss-cn-shanghai.aliyuncs.com</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 全目录上传</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">          folder:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 不上传的文件</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">          exclude:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> |</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            .github/</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            .gitattributes</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p><a href="https://medium.com/pinata/how-to-easily-host-a-website-on-ipfs-9d842b5d6a01" target="_blank" rel="noopener noreferrer">How to Easily Host a Website on IPFS</a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',14))])}]]),t=JSON.parse('{"path":"/deploy/Static.html","title":"静态部署","lang":"zh-CN","frontmatter":{"article":false,"title":"静态部署","icon":"fa6-solid:circle-nodes","order":1,"description":"静态托管 如果在国内静态资源库找不到所需的静态包，建议使用 npm i 命令将其下载到本地，然后部署到阿里云/七牛云的国内服务器上，以避免因 UNPKG 和 jsDelivr 等静态节点被屏蔽而导致网页样式显示出错。 静态资源库： Staticfile CDN：国内维护最稳定的 CDN。 字节 CDN：测速表现不错，缓存过期时间最长设置一年，而自 20...","head":[["meta",{"property":"og:url","content":"https://newzone.top/deploy/Static.html"}],["meta",{"property":"og:site_name","content":"Astrobiology 天体生物学"}],["meta",{"property":"og:title","content":"静态部署"}],["meta",{"property":"og:description","content":"静态托管 如果在国内静态资源库找不到所需的静态包，建议使用 npm i 命令将其下载到本地，然后部署到阿里云/七牛云的国内服务器上，以避免因 UNPKG 和 jsDelivr 等静态节点被屏蔽而导致网页样式显示出错。 静态资源库： Staticfile CDN：国内维护最稳定的 CDN。 字节 CDN：测速表现不错，缓存过期时间最长设置一年，而自 20..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-14T00:25:27.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-14T00:25:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"静态部署\\",\\"description\\":\\"静态托管 如果在国内静态资源库找不到所需的静态包，建议使用 npm i 命令将其下载到本地，然后部署到阿里云/七牛云的国内服务器上，以避免因 UNPKG 和 jsDelivr 等静态节点被屏蔽而导致网页样式显示出错。 静态资源库： Staticfile CDN：国内维护最稳定的 CDN。 字节 CDN：测速表现不错，缓存过期时间最长设置一年，而自 20...\\"}"]]},"git":{"createdTime":1739492727000,"updatedTime":1739492727000,"contributors":[{"name":"Astrobiology-cn","username":"Astrobiology-cn","email":"169008688+Astrobiology-cn@users.noreply.github.com","commits":1,"url":"https://github.com/Astrobiology-cn"}]},"readingTime":{"minutes":6.87,"words":2062},"filePathRelative":"deploy/Static.md","localizedDate":"2025年2月14日","excerpt":"<h2>静态托管</h2>\\n<p>如果在国内静态资源库找不到所需的静态包，建议使用 <code>npm i</code> 命令将其下载到本地，然后部署到阿里云/七牛云的国内服务器上，以避免因 UNPKG 和 jsDelivr 等静态节点被屏蔽而导致网页样式显示出错。</p>\\n<p>静态资源库：</p>\\n<ul>\\n<li><a href=\\"https://www.staticfile.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Staticfile CDN</a>：国内维护最稳定的 CDN。</li>\\n<li><a href=\\"https://cdn.bytedance.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">字节 CDN</a>：测速表现不错，缓存过期时间最长设置一年，而自 2022 年 3 月起，静态资源已不再更新。</li>\\n</ul>","autoDesc":true}')}}]);