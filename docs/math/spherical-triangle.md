---
article: false
title: 球面三角形
icon: 
order:
---
## 省流

**正弦定理**：
$$
\frac{\sin a}{\sin A}=\frac{\sin b}{\sin B}=\frac{\sin c}{\sin C}
$$


**余弦定理**：
$$
\begin{align}
\cos a=\cos b \cos c+\sin b \sin c \cos A \\
\cos b=\cos c \cos a+\sin c \sin a \cos B \\
\cos c=\cos a \cos b+\sin a \sin b \cos C
\end{align}
$$
## 基本概念
### 角和弧的量度单位
天文学，特别是球面天文学需要球面三角学的知识。球面三角中，常要用到角度和圆弧的度量关系。从平面三角学我们知道，一圆周的1/360，叫做1度的弧。

角和弧的量度单位，常用的有两种：

  * 弧度：长度和半径相等的圆弧所对的圆心角，叫做 1 弧度（rad）。
  * 由于一圆周的长度等于 2π 个圆半径的弧长，根据以上弧度的定义，得到弧度和度的关系如下：2πrad = 360°；1rad = 360/2π = 57.3°= 3438′= 206265′′；或者 1°=1/57.3 rad；1′=（1/60）°=1/3438 rad；1′′=（1/60）′=1/206265 rad。

如果一个角的值以弧度表示时为θ，那么以度表示时其值为 57.3°×θ ；以角分表示时为 3438′×θ ；以角秒表示时为 206265′′×θ 。为了方便起见，我们用符号θ°，θ′，θ′′表示一个角的度数、角分数、角秒数。

当角度很小时，角度的正弦或正切常可以近似地用它所对的弧来表示。例如：sin1′′≈tan1′′≈1′′=1/206265 rad 由此得：1rad =206265′′=206265 sin1′′ 根据相同的理由，得：sinθ′′≈tanθ′′≈θ′′= θ /206265=θ sin1′′ 上式常写为：θ =θ′′ sin1′′

### 弧和角距
![图1 经过球面上任意两点A、B可做一大圆|200](https://bkimg.cdn.bcebos.com/pic/774855362ec6f1c2a3cc2bae?x-bce-process=image/format,f_auto/resize,m_lfit,limit_1,h_400)

球面上的圆：从立体几何学得知，通过球心的平面截球面所得的截口是一个圆，叫做大圆；不通过球心的平面截球面所得的截口也是一个圆，叫做小圆。通过球面上不在同一直径两端的两个点，能做并且只能做一个大圆。

例如通过图 1 中的任意两点 A 和 B，也仅可以做一个大圆 ABC。A、B 两点间的大圆弧（小于 180° 的那段弧）可以用线长、也可以用角度计量，在天文上常用角度来计量，叫做 A、B 间的角距，记为⌒AB ，它等于大圆弧⌒AB 所对的中心角∠AOB。
### 极和极距
![图2球面上圆的极 P 与 P’|200](https://bkimg.cdn.bcebos.com/pic/b7bc4c663967d63bab184cb6?x-bce-process=image/format,f_auto/resize,m_lfit,limit_1,h_420)

球面上圆的极：设⌒ABC 为球面上的一个任意圆（图 2），它所在的平面为 MABC，又设 PP’为垂直于平面 MABC 的球直径，则它的两个端点 P 和 P’叫做圆⌒ABC 的极。如果用一句话来表达，可以这样说：垂直于球面上一已知圆（不论大圆或小圆）所在平面的球直径的端点，叫做这个圆的极。

球面上某一圆的极和这个圆上任一点的角距，叫做极距。可以证明，极到圆上各点的角距都是相等的；如果所讨论的圆是一个大圆的话，则极距为 90°。
### 球面角

![图3球面角的量度|200](https://bkimg.cdn.bcebos.com/pic/ac0acf1389795d1d5aaf538e?x-bce-process=image/format,f_auto/resize,m_lfit,limit_1,h_408)
球面角：**两个大圆弧相交所成的角，叫做球面角**。它们的交点叫做球面角的顶点。大圆弧本身叫做球面角的边。

图 3 绘出了两个相交的大圆弧⌒PA 和⌒PB，O 为球心，⌒PA 所在的平面为 POA，⌒PB 所在的平面为 POB，两者的交线为 OP。球面角∠APB 用 POA 和 POB 所构成的两面角来量度。在图 3 中做以 P 为极的大圆⌒QQ’，设⌒PA（或其延线）和⌒QQ’相交于 A’，⌒PB（或其延线）和⌒QQ’相交于 B’，则由于 P 为⌒QQ’的极，所以 OP 垂直于平面 QQ’，因而也垂直于 OA’和 OB’，所以∠A’OB’就是平面 POA 和 POB 所构成的两面角。即：球面角∠APB 可以用∠A'OB'量度，又因为∠A'OB'可以用 A'B'量度，所以最后得到的球面角∠APB 是以⌒A'B'弧量度的。

从上面的讨论可以概括出下述结果：如果以球面角的顶点为极作大圆，则球面角的边或其延长线在这个大圆上所截取的那个弧段便是球面角的数值。
### 球面三角形
![图4球面三角形|200](https://bkimg.cdn.bcebos.com/pic/a6c7d717b7afb816c93d6d96?x-bce-process=image/format,f_auto/resize,m_lfit,limit_1,h_418)

球面三角形：**把球面上的三个点用三个大圆弧联结起来，所围成的图形叫做球面三角形**。这三个大圆弧叫做球面三角形的边，通常用小写拉丁字母 a、b、c 表示；这三个大圆弧所构成的角叫做球面三角形的角，通常用大写拉丁字母 A、B、C 表示，并且规定：A 角和 a 边相对，B 角和 b 边相对，C 角和 c 边相对（如图 4 所示）。三个边和三个角合称球面三角形的六个元素。

### 极三角形

![图5极三角形](https://bkimg.cdn.bcebos.com/pic/1899a23e0b95ece5838b1365?x-bce-process=image/format,f_auto/resize,m_lfit,limit_1,h_352)

极三角形：设球面三角形 ABC 各边 a、b、c 的极分别为 A'、B'、C'（图 5），并设弧⌒AA'、⌒BB'、⌒CC'都小于 90°，则**由通过 A'、B'、C'的大圆弧构成的球面三角形 A'B'C'叫做原球面三角形的极三角形。**

极三角形和原三角形有着非常密切的关系，这种关系存在着两条定理：
- 定理 1：如果一球面三角形为另一球面三角形的极三角形，则另一球面三角形也为这一球面三角形的极三角形。
- 定理 2：极三角形的边和原三角形的对应角互补；极三角形的角和原三角形的对应边互补。

证明：B'是 b 的极（图 5），C'是 c 的极，所以有：⌒B'E=⌒C'D=90°；⌒B'E+⌒C'D=180°。即⌒B'C'+⌒DE=180° 但由定理 1，A 是⌒B'C'的极，故有⌒DE=A，将此式以及⌒B'C'=a'代人上式，便得到 a'+A=180° （1.1）（1.1）式即定理 2 的前半的证明。定理 2 的后半不需证明；因为实际上，它只是定理 1 和定理 2 的前半的一个推论。

## 边基本性质

  1. 球面三角形两边之和大于第三边，球面三角形两边之差小于第三边。

  2. 球面三角形三边之和大于 0° 而小于 360°。

  3. 球面三角形三角之和大于 180° 而小于 540°。

  4. 若球面三角形的两边相等，则这两边的对角也相等。反之，若两角相等，则这两角的对边也相等。

  5. 在球面三角形中，大角对大边，大边对大角。

## 基本公式

下面我们要推导出六个基本公式，它们全是针对三个边都小于 90° 的球面三角形导出的，但是能够证明所得公式适用于任何球面三角形。
### 边的余弦公式

![图7推导余弦公式的图](https://bkimg.cdn.bcebos.com/pic/0b14ad19e376685a42a9ad77?x-bce-process=image/format,f_auto/resize,m_lfit,limit_1,h_299)

取球面三角形 ABC，将各顶点与球心 O 连结，可得一球心三面角 O-ABC（图 7）。过顶点 A 做 b、c 边的切线，分别交 OC，OB 的延长线于 N、M，由此得到两个平面直角三角形 OAM、OAN 和两个平面普通三角形△OMN、△AMN。

在平面△ OMN 和平面△AMN中，应用平面三角的余弦定理，得
$$
\begin{align}
\text{MN}^2=\text{OM}^2+\text{ON}^2－2\text{OM} \cdot \text{ON} \cos a \\
\text{MN}^2=\text{AM}^2+\text{AN}^2－2\text{AM} \cdot \text{AN} \cos A
\end{align}
$$ 因此
$$
\begin{align}
\text{OM}^2+\text{ON}^2－2\text{OM} \cdot \text{ON} \cos a&=\text{AM}^2+\text{AN}^2－2\text{AM} \cdot \text{AN} \cos A \\
2\text{OM} \cdot \text{ON} \cos a &=\text{OM}^2-\text{AM}^2+\text{ON}^2-\text{AN}^2+2\text{AM} \cdot \text{AN} \cos A\\
2\text{OM} \cdot \text{ON} \cos a &= \text{OA}^2+\text{OA}^2+2\text{AM} \cdot \text{AN} \cos A\\
 \cos a &= \frac{OA}{ON}\frac{OA}{OM}+\frac{AN}{ON}\frac{AM}{OM} \cdot \cos A
\end{align}
$$

将 $\frac{OA}{ON}=\cos b$，$\frac{OA}{OM}=\cos c$，$\frac{AN}{ON}=\sin b$，$\frac{AM}{OM} = \sin c$ 代入上式，便得到 
$$\cos a=\cos b \cos c+\sin b \sin c \cos A \tag{1.2}$$
易得
$$\cos b=\cos c \cos a+\sin c \sin a \cos B \tag{1.3}$$
$$\cos c=\cos a \cos b+\sin a \sin b \cos C \tag{1.4}$$
球面三角形任意边的余弦等于其他两边余弦的乘积加上这两边的正弦及其夹角余弦的连乘积。

### 角的余弦公式

设球面三角形 ABC 的极三角形为 A'B'C'，则按照（1.2）式有 
$$\cos A=-\cos B \cos C+\sin B \sin C \cos a \tag{1.5}$$
球面三角形任一角的余弦等于其它两角余弦的乘积冠以负号加上这两角的正弦及其夹边余弦的连乘积。

### 正弦公式

![图8推导正弦公式的图](https://bkimg.cdn.bcebos.com/pic/3a86813d36140e1fbba1674d?x-bce-process=image/format,f_auto/resize,m_lfit,limit_1,h_283)

取球面三角形 ABC，做球心三面角 O-ABC 。过 C 点做 OAB 平面的垂线交此平面于 D（图 8），再从 D 向 OA、OB 引垂线 DE，DF。连接 CE 和 CF；由此得四个平面三角形 OEC、OFC、CDE、CDF。因 CD 垂直于平面 OAB，DE⊥OA，所以 OA⊥CE；同理 OB⊥CF，因此，四个平面三角形 OEC、OFC、CDE、CDF 都是直角三角形，并且有∠CED=A，∠CFD=B。

从图 8 可得
$$
\begin{align}
\frac{\sin a}{\sin A} & =\frac{CF}{OC}\frac{CD}{CE}=\frac{CF\cdot CE}{OC \cdot CD}\\ 
\frac{\sin b}{\sin B} & =\frac{CE}{OC}\frac{CD}{CF}=\frac{CF\cdot CE}{OC \cdot CD}
\end{align}
$$
因得 
$$
\frac{\sin a}{\sin A}=\frac{\sin b}{\sin B}
$$
利用轮换变更字母法，可以得出其它两个类似的式子，最后得 
$$
\frac{\sin a}{\sin A}=\frac{\sin b}{\sin B}=\frac{\sin c}{\sin C}
\tag{1.6}
$$
球面三角形各边的正弦和对角的正弦成正比。

### 第一五元素公式

由边的余弦公式有：
$$
\begin{align}
\cos a =\cos b \cos c + \sin b \sin c \cos A\\
\cos b=\cos c \cos a + \sin c \sin a \cos B 
\end{align}
$$
将第二个式子代入第一个式子得：
$$
\begin{align}
\sin c \sin a \cos B
&=\cos b－\cos c(\cos b \cos c + \sin b \sin c \cos A)\\
&=\cos b－\cos b (\cos c)^2－\sin b \sin c \cos c \cos A\\
&=\cos b (\sin^2c)－\sin b \sin c \cos c \cos A \\
\end{align}
$$
同时除以$\sin c$得
$$
\sin a \cos B = \cos b \sin c－\sin b \cos c \cos A
\tag{1.7}
$$
同理，得 
$$
\sin a \cos C = \cos c \sin B－\sin b \cos c \cos A 
\tag{1.8}
$$

### 第二五元素公式

利用极三角形和原三角形的关系（定理 2），可以导出下列两个公式：
$$
\sin A \cos b=\cos B \sin C+\sin B \cos C \cos a \tag{1.9}
$$
$$
\sin A \cos c=\cos C \sin B+\sin C \cos B \cos a \tag{1.10}
$$

其它类似的式子可以从（1.9）式或（1.10）式，利用轮换变更字母法得出，（1.9）或（1.10）式都是第二五元素公式。

### 四元素公式

把第一五元素公式和正弦公式联合起来，可以导出球面三角形中相邻的四个元素的关系式，即：

$$
\cot A \sin C=-\cos C \cos b+\sin b \cot a \tag{1.11}
$$

$$
\cot A \sin B=-\cos B \cos c+\sin c \cot a \tag{1.12}
$$

其他类似的式子，可以从（1.11）式或（1.12）式利用轮换变更字母法得出。

## 直角球面三角形

有一个角等于 90° 的球面三角形叫做直角球面三角形。设球面三角形 ABC 中，C=90°，且 cos C=0，sin C=1，将它们代入以上各公式，经过适当的变换，可得下列常用的直角三角形公式：
$$
\begin{align}
\cos c &= \cos a \cos b ，\quad \sin b = \sin c \sin B\\
\sin a &= \sin c \sin A ，\quad \sin b = \tan a \cot A\\
\sin a &= \tan b \cot B ，\quad \cos c = \cot A \cot B\\
\cos B &= \tan a \cot c ，\quad \cos A = \tan b \cot c\\
\cos B &= \cos b \sin A ，\quad \cos A = \cos a \sin B \\
\end{align}
\tag{1.13}
$$

### 纳皮尔法则

![图9用聂比尔定则记直角球面三角十公式](https://bkimg.cdn.bcebos.com/pic/8cf0d513e5b4d63cdc540125?x-bce-process=image/format,f_auto/resize,m_lfit,limit_1,h_230)

为了便于记忆这十个直角三角形公式，聂比尔提出了一条很有用的定则。除掉直角 C，用（90°－a）和（90°－b）分别代替夹直角的两个边 a 和 b，然后把所得的五个元素依序排成一个圆（如图 9 所示）；这样，每个元素有两个相邻元素和两个相对元素。聂比尔定则为：每个元素的余弦等于两相邻元素的余切的乘积或者等于两相对元素的正弦的乘积。例如，当所选元素为 C 时根据定则的前半得 cos c=cot A cot B，这就是（1.13） 式里的第六式。根据定则的后半得 cos c=sin（90°－b) sin（90 °－a)=cos a cos b，这就是（1.13）式里的第一式 。