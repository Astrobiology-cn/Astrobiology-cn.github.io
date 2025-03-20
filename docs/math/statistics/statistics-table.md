---
article: false
title: 常见分布表
icon: 
order: 0.01
---
常用分布表

| 名称     | 概率分布                                                                                                   | 均值                                      | 方差                                                                                                        | 参数的范围                         |
| ------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------- |
| 二点分布   | $P(X=x)=p^{r}q^{1-r},(x=0,1)$                                                                          | $p$                                     | $pq$                                                                                                      | $0\le p\le 1 , q=1-p$         |
| 二项分布   | $P(X=r)=C_{n}^{r}p^{r}q^{n-r},(r=0,1,\ldots,n)$                                                        | $np$                                    | $npq$                                                                                                     | $0\le p\le 1 , q=1-p , n为自然数$ |
| 泊松分布   | $P(X=r)=\frac{\lambda^{r}}{r!}e^{-\lambda},(r=0,1,2,\ldots)$                                           | $\lambda$                               | $\lambda$                                                                                                 | $\lambda > 0$                 |
| 超几何分布  | $P(X=r)=\frac{C_{M}^{r}C_{N-M}^{n-r}}{C_{N}^{n}},(r=0,1,\ldots,min(M,n))$                              | $\frac{nM}{N}$                          | $\frac{n(N-n)(N-M)M}{N^{2}(N-1)}$                                                                         | $n,M,N为自然数$                   |
| 负二项分布  | $P(X=r)=C_{r+k-1}^{r}p^{k}q^{r},(r=0,1,2,\ldots)$                                                      | $\frac{kq}{p}$                          | $\frac{kq}{p^{2}}$                                                                                        | $0 < p < 1 , q=1-p , k为自然数$   |
| 均匀分布   | $f(x)=\frac{1}{b-a},(a < x < b)$                                                                       | $\frac{a+b}{2}$                         | $\frac{(b-a)^{2}}{12}$                                                                                    | $b > a$                       |
| 指数分布   | $f(x)=\lambda e^{-\lambda x},(x \geq 0)$                                                               | $\frac{1}{\lambda}$                     | $\frac{1}{\lambda^{2}}$                                                                                   | $\lambda > 0$                 |
| 正态分布   | $f(x)=\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-\mu)^{2}}{2\sigma^{2}}}$                                 | $\mu$                                   | $\sigma^{2}$                                                                                              | $\mu任意 , \sigma > 0$          |
| 伽马分布   | $f(x)=\frac{1}{\Gamma(\alpha)\beta^{\alpha}}x^{\alpha-1}e^{-\frac{x}{\beta}},(x > 0)$                  | $\alpha\beta$                           | $\alpha\beta^{2}$                                                                                         | $\alpha > 0 , \beta > 0$      |
| 贝塔分布   | $f(x)=\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}x^{\alpha-1}(1-x)^{\beta-1},(0 < x < 1)$ | $\frac{\alpha}{\alpha+\beta}$           | $\frac{\alpha\beta}{(\alpha+\beta)^{2}(\alpha+\beta+1)}$                                                  | $\alpha > 0 , \beta > 0$      |
| 对数正态分布 | $f(x)=\frac{1}{x\sqrt{2\pi}\sigma}e^{-\frac{(\ln x-\mu)^{2}}{2\sigma^{2}}},(x > 0)$                    | $e^{\mu+\frac{\sigma^{2}}{2}}$          | $e^{2\mu+\sigma^{2}}(e^{\sigma^{2}}-1)$                                                                   | $\mu任意 , \sigma > 0$          |
| 韦布尔分布  | $f(x)=\frac{m}{\eta}\left(\frac{x}{\eta}\right)^{m-1}e^{-\left(\frac{x}{\eta}\right)^{m}},(x > 0)$     | $\eta \Gamma\left(1+\frac{1}{m}\right)$ | $\eta^{2}\left[\Gamma\left(1+\frac{2}{m}\right)-\left(\Gamma\left(1+\frac{1}{m}\right)\right)^{2}\right]$ | $m > 0 , \eta > 0$            |

