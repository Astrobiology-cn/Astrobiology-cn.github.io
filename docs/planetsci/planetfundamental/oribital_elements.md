---
article: false
title: 椭圆轨道六根数
icon:
---
## 什么是轨道根数
在二体问题中，**轨道根数**（orbital elements）是描述物体运动轨迹的简便形式。三维空间中，唯一确定物体轨迹需要六个参数，如位置矢量和速度矢量（均为三维）可共同确定物体轨迹。此外，用六个轨道根数也可描述它。通常的**轨道六根数**指的是：**半长轴$a$**、**离心率$e$**、**轨道倾角$i$**、**近心点辐角$\omega$**、**升交点经度$\Omega$** 和 **真近点角$\varphi$**。经过三角函数运算，它们能表示出物体所处特定位置和速度。

轨道六根数如图所示。

[![轨道六根数](https://huiji-public.huijistatic.com/sat/uploads/d/d3/009_chen.png)](https://sat.huijiwiki.com/wiki/%E6%96%87%E4%BB%B6:009_chen.png "轨道六根数")

值得注意的是，椭圆和双曲线轨道拥有完整的六根数。而**抛物线轨道**中不存在半长轴aa，而用半通径$p$替代。且抛物线离心率$e$恒为1，故仅需五个轨道根数来描述抛物线轨道。

而在**圆轨道**中，描述轨道仅需四个参数，一般将真近点角$\varphi$与近心点辐角$\omega$合并为纬度辐角$u$，同时离心率$e$为0，矢量不再有意义。故只需要四个。

## 轨道六根数转位置速度矢量

轨道坐标系经过三次方向余弦矩阵变换即可变为中心天体惯性系。第一次变换时，轨道平面绕参考坐标系z轴转过$-\Omega$，升交线与参考坐标系x轴重合；第二次变换时，轨道平面绕参考坐标系x轴转过$-i$，轨道平面正法向与参考坐标系z轴重合；第三次变换时，轨道平面绕参考坐标系z轴转过$-\omega$，离心率矢量与参考坐标系x轴重合；另外，在参考坐标系下，物体坐标为$\left[ {r\cos \varphi ,r\sin \varphi ,0} \right]'$。整个过程为欧拉角序列3-1-3。

同时，注意到位置矢量的大小仅是半通径$p$和真近点角的函数，而半通径可由半长轴和离心率求出，或直接给出：
$$
r=p1+ecos⁡φr = \frac{p}{1 + e\cos \varphi }
$$

最终有：

$$
\hat{r} = R_3(-\Omega )R_1(-i){R_3}(-\omega ) \begin{bmatrix} r\cos \varphi \\ r\sin \varphi \\ 0 \end{bmatrix}
$$

$$
\begin{align}
\hat{r}=\frac{p}{1+e\cos\varphi}
\begin{bmatrix}
\cos\Omega\cos(\omega+\varphi)-\sin\Omega\sin(\omega+\varphi)\cos i \\
\sin\Omega\cos(\omega+\varphi)+\cos\Omega\sin(\omega+\varphi)\cos i \\
\sin(\omega+\varphi)\sin i
\end{bmatrix}
\end{align}
$$

  
由于运动中除了$\varphi$，其余轨道根数均不变，且轨道六根数可唯一确定位置矢量，因此位置矢量是$\varphi$的函数。从而有：
$$
\hat v = \frac{\mathrm {d}\hat r}{\mathrm {d}\varphi }\frac{\mathrm {d}\varphi }{\mathrm {d}t}
$$

同时注意到真近点角的微分为： 
$$
\frac{\mathrm {d}\varphi }{\mathrm {d}t} = \frac{\sqrt \mu }{p^{3/2}}{(1 + e\cos \varphi )^2} 
$$
其中$\mu$是中心天体引力常数 , $\mu = \frac{h^2}{GM}$

最后，有：
$$
\hat{v}=\sqrt{\frac{\mu}{p}}
\begin{bmatrix}
-\cos\Omega(\sin(\omega+\varphi)+e\sin\omega)-\sin\Omega(\cos(\omega+\varphi)+e\cos\omega)\cos i \\
-\sin\Omega(\sin(\omega+\varphi)+e\sin\omega)+\cos\Omega(\cos(\omega+\varphi)+e\cos\omega)\cos i \\
(\cos(\omega+\varphi)+e\cos\omega)\sin i
\end{bmatrix}
$$

## 位置速度矢量转轨道六根数

位置速度矢量转轨道六根数的过程是依照轨道六根数的定义进行的。 首先求半长轴$a$。若物体的速度大小为$v$，离中心天体的距离为$r$，则： 
$$
a=(2r−v2μ)−1a = {\left( {\frac{2}{r} - \frac{v^2}{\mu }} \right)^{ - 1}} 
$$
$a$应为有限正数。若求出$a$为无穷，则表明轨道为抛物线，可忽略此步去求解半通径$p$；若求出$a$为负，则表明轨道为双曲线，需改变$a$的符号。

计算角动量$\hat h$:
$$\hat h = \hat r \times \hat v$$

再计算离心率矢量$\hat e$：
$$
\hat e = \frac{1}{\mu} \left( (\hat v \times \hat h) - \frac{\mu \hat r}{r} \right) 
$$
轨道六根数中的离心率为离心率标量，即$\hat e$的模。若$e$为零向量，则说明轨道为圆。

若已经认定轨道为抛物线，则依据： $p = \frac{h^2}{\mu }$ 求出抛物线的轨道根数之一，即半通径。

已知角动量和z轴单位矢量$\hat z$，轨道倾角ii即可求： 
$$
\cos i = \frac{\hat z \cdot \hat h}{h} 
$$
再计算升交线矢量${\hat n}$： 
$$
\hat n = \hat z \times \hat h
$$

升交点经度$\Omega$可由此计算： 
$$
\cos \Omega = \frac{\hat n \cdot \hat x}{n} 
$$
若$\hat y \cdot \hat n > 0$，即升交线与yy轴交角为锐角，则$\Omega < {180^ \circ }$。 近心点辐角$\omega$也可算出：
$$\cos \omega = \frac{\hat n \cdot \hat e}{ne}$$
如果$\hat z \cdot \hat e > 0$，即离心率矢量与z轴正半轴夹角为锐角，那么$\omega < {180^ \circ }$。

最后是真近点角$\varphi$：
$$\cos \varphi = \frac{\hat e \cdot \hat r}{er}$$ 
如果$\hat r \cdot \hat v > 0$，即位置矢量与速度矢量之间夹角为锐角，则$\varphi < {180^ \circ }$。

由此，椭圆、抛物线或双曲线的轨道根数全部求出。

若轨道在离心率计算时已被认定为圆，则不必计算真近点角$\varphi$与近心点辐角$\omega$，而依照下式计算纬度辐角$u$：
$$\cos u = \frac{\hat n \cdot \hat r}{nr}$$ 如果$\hat r \cdot \hat z > 0$，即物体在xOyxOy平面上方，则$u < {180^ \circ }$。

## 特殊情况讨论

赤道轨道中的近地点幅角计算

在赤道轨道情况下，轨道平面与赤道平面重合，因此升交点经度 $\Omega$ 无法定义。在这种情况下，我们将使用春分线作为参考方向来计算近地点幅角 $\omega$ 。

#### 1.偏心率向量 $\hat e$

偏心率向量 $\hat e$ 的计算公式为：
$$
\hat e = \frac{1}{\mu} \left( (\hat v \times \hat h) - \frac{\mu \hat r}{r} \right) 
$$
其中： $\hat v$ 是速度矢量，  $\hat r$ 是位置矢量， $\mu$ 是地心引力常数， $\hat h = \hat r \times \hat v$ 是比角动量矢量。

#### 2.春分线方向

在地心赤道惯性坐标系中，春分线方向通常指向 x 轴，即单位向量：

$$
 \mathbf{i}_x = (1, 0, 0)
$$

#### 3.计算近地点幅角 $\omega$

近地点幅角 $\omega$ 是从春分线方向到近地点的角度，可以通过偏心率向量  $\hat e$ 和春分线方向  $\mathbf{i}_x$ 的夹角计算：
$$
\omega = \cos^{-1} \left( \frac{\hat e \cdot \mathbf{i}_x}{|\hat e|} \right) 
$$
其中 $\hat e \cdot \mathbf{i}_x$ 是偏心率向量与春分线方向的点积，$|\hat e|$是偏心率向量的模。

#### 4.考虑方向

为了确保角度方向的正确性，检查偏心率向量 $\hat e$ 和角动量矢量 $\hat h$ 的叉积的 z 分量。若叉积的 z 分量为负，则需要进行修正：
$$\omega = 2\pi - \omega$$ 这样可以确保 $\omega$ 始终为正角度。

## 轨道根数其他表示

在一般轨道中，除了上述的六个轨道根数的组合，轨道六根数还有其他组合方式。例如，真近点角$\varphi$可换为平近点角 $M$ 或平经度 $L$ ；升交点经度 $\Omega$ 或近心点辐角 $\omega$ 可换为近心点经度 ${\tilde \omega }$ 等。

## 附：Matlab实现互化

### 轨道六根数转位置速度矢量

```
function [Coordinate,V]=Classic_Coordinate(data,miu)
%/* Classic_Coordinate: convert orbit factors to velocity and location

% miu: GM of center body

% data: For ellipse and hyperbola: a;e;i;w;W;fai of transfer orbit
% %a:semi-major axis; e:eccentricity; i:inclination;
% %w:argument of periapsis; W:longitude of ascending node; fai:true anomaly.

% For parabola: p;i;w;W;fai of transfer orbit
% %p:semi latus rectum; i:inclination; w:argument of periapsis;
% %W:longitude of ascending node; fai:true anomaly.

% For circle: a;i;u;W; of transfer orbit
% %a:radius; i:inclination; u:argument of latitude;
% %W:longitude of ascending node;

% Coordinate:location
% V:velocity */

if length(data)==6 % ellipse and hyperbola
a=data(1);
e=data(2);
i=data(3);
w=data(4);
W=data(5);
fai=data(6);
p=abs(a*(1-e^2));
u=w+fai;
elseif length(data)==5 % parabola
 p=data(1);
i=data(2);
w=data(3);
W=data(4);
fai=data(5);
u=w+fai;
else %circle
p=data(1);
e=0;
i=data(2);
w=0;
u=data(3);
W=data(4);
fai=0;
end

Coordinate=p/(1+e*cos(fai))*[cos(W)*cos(u)-sin(W)*sin(u)*...
cos(i) sin(W)*cos(u)+cos(W)*sin(u)*cos(i) sin(i)*sin(u)]';
V=(miu/p)^(0.5)*[-cos(W)*(sin(u)+e*sin(w))-sin(W)*(cos(u)...
+e*cos(w))*cos(i) -sin(W)*(sin(u)+e*sin(w))+cos(W)*(cos(u)+...
e*cos(w))*cos(i) sin(i)*(cos(u)+e*cos(w))]';
	1. end
```

### 位置速度矢量转轨道六根数

```matlab
function [data]=Coordinate_Classic(R,V,miu)

%/* Classic_Coordinate: convert velocity and location to orbit factors

% miu: GM of center body

% data: For ellipse and hyperbola: a;e;i;w;W;fai of transfer orbit
% %a:semi-major axis; e:eccentricity; i:inclination;
% %w:argument of periapsis; W:longitude of ascending node; fai:true anomaly.
  
% For parabola: p;i;w;W;fai of transfer orbit
% %p:semi latus rectum; i:inclination; w:argument of periapsis;
% %W:longitude of ascending node; fai:true anomaly.

% For circle: a;i;u;W; of transfer orbit
% %a:radius; i:inclination; u:argument of latitude;
% %W:longitude of ascending node;  

% Coordinate:location
% V:velocity */

r=sqrt(dot(R,R));
if 2/r-dot(V,V)/miu~=0
	a=1/abs(2/r-dot(V,V)/miu);
end

E=(dot(V,V)/miu-1/r)*R-dot(R,V)/miu*V;
e=sqrt(dot(E,E));

H=cross(R,V);
h=sqrt(dot(H,H));
p=h^2/miu;
Z=[0 ;0 ;1];
X=[1 ;0 ;0];
Y=[0 ;1 ;0];
N=cross(Z,H);
n=sqrt(dot(N,N));
i=acos(dot(Z,H)/h);

if e~=0
	w=acos(dot(N,E)/n/e);
	if dot(Z,E)<0
		w=2*pi-w;
	end
else
	u=acos(dot(N,R)/n/r);
	if dot(R,Z)<0
		u=2*pi-u;
	end
end

W=acos(dot(X,N)/n);
if dot(Y,N)<0
	W=2*pi-W;
end


if e~=0
	fai=acos(dot(E,R)/e/r);
	if dot(R,V)<0
		fai=2*pi-fai;
	end
end

  
if 2/r-dot(V,V)/miu~=0
	if e~=0
		data=[a;e;i;w;W;fai];
	else
		data=[a;i;u;W];
	end
else
	data=[p;i;w;W;fai];
end

end
```


## 轨道两行根数

[NORAD](https://sat.huijiwiki.com/wiki/NORAD "NORAD")结合空间物体的发射信息和轨道六根数，发明了[两行根数](https://sat.huijiwiki.com/wiki/%E4%B8%A4%E8%A1%8C%E6%A0%B9%E6%95%B0 "两行根数")，具体含义见[这里](https://sat.huijiwiki.com/wiki/%E4%B8%A4%E8%A1%8C%E6%A0%B9%E6%95%B0 "两行根数")。



