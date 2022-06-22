
/**
 * @title   一天速成JavaScriptt
 * @author  CT 
 * 
 * 
 * 
 * 
 *               ii.                                         ;9ABH,          
 *              SA391,                                    .r9GG35&G          
 *              &#ii13Gh;                               i3X31i;:,rB1         
 *              iMs,:,i5895,                         .5G91:,:;:s1:8A         
 *               33::::,,;5G5,                     ,58Si,,:::,sHX;iH1        
 *                Sr.,:;rs13BBX35hh11511h5Shhh5S3GAXS:.,,::,,1AG3i,GG        
 *                .G51S511sr;;iiiishS8G89Shsrrsh59S;.,,,,,..5A85Si,h8        
 *               :SB9s:,............................,,,.,,,SASh53h,1G.       
 *            .r18S;..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,....,,.1H315199,rX,       
 *          ;S89s,..,,,,,,,,,,,,,,,,,,,,,,,....,,.......,,,;r1ShS8,;Xi       
 *        i55s:.........,,,,,,,,,,,,,,,,.,,,......,.....,,....r9&5.:X1       
 *       59;.....,.     .,,,,,,,,,,,...        .............,..:1;.:&s       
 *      s8,..;53S5S3s.   .,,,,,,,.,..      i15S5h1:.........,,,..,,:99       
 *      93.:39s:rSGB@A;  ..,,,,.....    .SG3hhh9G&BGi..,,,,,,,,,,,,.,83      
 *      G5.G8  9#@@@@@X. .,,,,,,.....  iA9,.S&B###@@Mr...,,,,,,,,..,.;Xh     
 *      Gs.X8 S@@@@@@@B:..,,,,,,,,,,. rA1 ,A@@@@@@@@@H:........,,,,,,.iX:    
 *     ;9. ,8A#@@@@@@#5,.,,,,,,,,,... 9A. 8@@@@@@@@@@M;    ....,,,,,,,,S8    
 *     X3    iS8XAHH8s.,,,,,,,,,,...,..58hH@@@@@@@@@Hs       ...,,,,,,,:Gs   
 *    r8,        ,,,...,,,,,,,,,,.....  ,h8XABMMHX3r.          .,,,,,,,.rX:  
 *   :9, .    .:,..,:;;;::,.,,,,,..          .,,.               ..,,,,,,.59  
 *  .Si      ,:.i8HBMMMMMB&5,....                    .            .,,,,,.sMr
 *  SS       :: h@@@@@@@@@@#; .                     ...  .         ..,,,,iM5
 *  91  .    ;:.,1&@@@@@@MXs.                            .          .,,:,:&S
 *  hS ....  .:;,,,i3MMS1;..,..... .  .     ...                     ..,:,.99
 *  ,8; ..... .,:,..,8Ms:;,,,...                                     .,::.83
 *   s&: ....  .sS553B@@HX3s;,.    .,;13h.                            .:::&1
 *    SXr  .  ...;s3G99XA&X88Shss11155hi.                             ,;:h&,
 *     iH8:  . ..   ,;iiii;,::,,,,,.                                 .;irHA  
 *      ,8X5;   .     .......                                       ,;iihS8Gi
 *         1831,                                                 .,;irrrrrs&@
 *           ;5A8r.                                            .:;iiiiirrss1H
 *             :X@H3s.......                                .,:;iii;iiiiirsrh
 *              r#h:;,...,,.. .,,:;;;;;:::,...              .:;;;;;;iiiirrss1
 *             ,M8 ..,....,.....,,::::::,,...         .     .,;;;iiiiiirss11h
 *             8B;.,,,,,,,.,.....          .           ..   .:;;;;iirrsss111h
 *            i@5,:::,,,,,,,,.... .                   . .:::;;;;;irrrss111111
 *            9Bi,:,,,,......                        ..r91;;;;;iirrsss1ss1111
 */






/**
 * ############################################################
 * ######################   STRING   ##########################                                                       
 * ############################################################
 */
// 字符串操作
function operatorString() {
  // 打印指定位置的Unicode编码
  var str = 'abc';
  console.log(str.charAt(1)); // output 98


  // 连接字符串
  var basic = "l";
  var suffix = "love you";
  console.log(basic.concat(suffix)); // output "l love you"



  // 检索字符串。indexOf() 方法对大小写敏感！
  var index = "Hello world";
  console.log(index.indexOf("Hello")); // output 0 



  // 替换字符串
  var repr = "l love me";
  console.log(repr.replace('me', 'you')); // output "l love you"



  // 提取字符串的片断，并在新的字符串中返回被提取的部分。
  // stringObject.slice(start,end);
  // start :要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。
  // 也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。
  // end：紧接着要抽取的片段的结尾的下标。
  // 若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。
  // 如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。
  var sli = "Solidity";
  console.log(sli.slice(2)); // output "lidiy"



  // 字符串分割
  var spli ="abc def ghi jkl";  
  console.log(str.split(" ")); // ["abc", "def", "ghi", "jkl"]
  console.log(str.split("") ); // ["a", "b", "c", " ", "d", "e", "f", " ", "g", "h", "i", " ", "j", "k", "l"]
  console.log(str.split(" ",3)); // ["abc", "def", "ghi"]


  // 转换大小写
  var lower ="ABC def!";
  console.log(lower.toLocaleLowerCase()) // output abc def!
  console.log(lower.toLowerCase()) // output abc def!

  var upper ="ABC def!";
  console.log(upper.toLocaleUpperCase()) // output ABC DEF!
  console.log(upper.toUpperCase()) // output ABC DEF!



  // 返回一个新的字符串，表示将原字符串重复n次
  // 如果是小数会被取整
  var repe = "str";
  console.log(repe.repeat(3)) // output   "strstrstr"
  console.log(repe.repeat(0)) // output   ""
  console.log(repe.repeat(2.9)) // output "strstr"
}












/**
 * ############################################################
 * ######################   ARRAY   ###########################                                                       
 * ############################################################
 */
// 数组操作
async function operatorArray() {
    // 定义数组
  let a = [1,5,4,5];
  
  // 插入数组
  a.push(8);

  // 检查数组中满足条件的某一个元素
  // some不执行空数组元素
  // some不会更改原始数组
  // some捕捉到的元素返回`true`, 反之`false`
  // some如果返回所有的元素，则返回(false, false)
  // 标准写法：array.some(function(value, index, arr), this);
  a.some(result => result < 8);

  // 检查数组中满足条件的所有元素
  // every捕捉到的元素返回`true`, 反之`false`
  // 和some实现类似
  a.every(result => result == 10);

  // 检查数组中满足条件的所有元素
  // filter返回满足条件的所有元素 [9, 8, 12, 15]
  a.filter((result) => result > 8);


  // valueOf
  // 返回数组本身
  // 不会更改原始数组
  // 等同于 fruits_array=fruits
  const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
  const fruits_array = fruits.valueOf();



  // 遍历数组
  for (var i = 0; i < a.length; ++i) {
    console.log("result:", a[i]);
  }



  // 高级操作
  // 关联数组的字典中创建函数，并且调用
  var operator_high = {}
  operator_high["a"] = 6;
  operator_high["b"] = "sdgs";
  operator_high["getNums"] = () => {return "hello array !"}
  console.log(operator_high.getNums());
}


/**
 * ############################################################
 * ######################  EXPORT  ############################                                                 
 * ############################################################
 */

// `export` 用于从脚本文件或模块中导出函数、对象、类或表达式
// 假设这个函数在Utilities.js
export function cube(x) {
  return x * x * x;
}
export const foo = Math.PI + Math.SQRT2;

//然后在其他js文件导入时，可以这样写
import { cube, foo } from 'Utilities';
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888























/**
 * ############################################################
 * ######################  箭头函数  ###########################                                                      
 * ############################################################
 */
// 用 => 代替 function() {}
// 简单理解为python的 lamda 和 golang 的 function() 的实现就差不多了
// 例1：
function operatorArrow() {
  const a = () => {
    return "hello";
  }
  return (a, b) => {
    return a+b;
  }
}

// 例2：
const operatorArrows = (a, b) => {
  return a * b;
}
console.log(operatorArrays(5,8));







/**
 * ############################################################
 * ######################  PROMISE  ###########################                                                       
 * ############################################################
 */

/**
 * @notice 下面的源码是同步和阻塞的，当JavaScript进入findPerson()函数时，
 * 在函数执行之前它不会离开那里
 * 获取人员列表 `const list = getList()` 也是一个同步操作
 * 同步代码很简单，但是对于某些数据，例如：(通过网络获取数据)可能需要一段时间才能获取
 * 例如：访问getList()是一个1秒的操作
 * 
 * (如果让getList()延迟1秒返回，findPerson(who)延迟1秒访问，下面的写法将会非常的复杂
 *  使用回调的代码更难理解，因为计算流程隐藏在回调之间，如果需要回调来管理许多异步操作，
 *  很容易遇到回调地狱问题）
 */
function getList() {
  setTimeout(() => callback(["joker", "batman"]), 1000);
}

function findPerson(who) {
  getList(
    list => {
      const found = list.some(person => person == who);
      console.log(found);
    }
  );

}
findPerson("joker");


/**
 * @notice Promise 包装异步操作的结果，可以从函数同步返回，分配给变量，或用作参数。
 * 这就是Promise的思想：封装异步性并允许处理异步操作的汗你守护看起来仍然是同步的。
 * 而且可以解决优化大量的回调函数
 * 
 * Promise 包括三种状态：
 * 待处理:  刚刚创建的Promise处于待处理状态，只要后面的异步操作正在进行，Promise就会挂起。
 * 已完成:  异步操作完成
 * 被拒绝:  异步操作失败
 * 
 * Promise有点像golang里的返回自定义type的闭包写法,处理回调函数
 * 例：
 * const promise = new Promise((resolve, rejcet) => {
 *  if (asyncOperationSuccess) {resolve(value);
 *  } else {
 *   reject(error);
 *  }
 *  
 * })
 */
function getList() {
  return new Promise(resolve => {
    setTimeout(() => resolve(['joker', 'Batman']), 1000);
  });
}

function findPerson(who) {
  const listPromise = getList();

  listPromise
      .then(list => {
        const found = list.some(person => person == who);
        console.log(found);
      })
}
findPerson("joker");



/**
 * ############################################################
 * ######################   ITERATOR   ########################                                                    
 * ############################################################
 */
// 生成器函数是 ES6提供的一种异步编程解决方案，语法行为与传统函数完全不同
// 和Python的yield一样每次迭代生成一条数据，减少数组开销
function iterator() {
  yield "我"
  yield "是"
  yield "大聪明"
}
let iter = iterator();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());




/**
 * ############################################################
 * ######################  有限状态机  ##########################                                                       
 * ############################################################
 */

// 有限状态机（Finite-state machine）是一个非常有用的模型，可以模拟世界上大部分事物。
// 简单说，它有三个特征：状态总数（state）是有限的。任一时刻，只处在一种状态之中。某种条件下，会从一种状态转变（transition）到另一种状态。
// 举例来说，网页上有一个菜单元素。鼠标点击，菜单显示；鼠标再次点击，菜单隐藏。
// 如果使用有限状态机描述，就是这个菜单只有两种状态（显示和隐藏），鼠标会引发状态转变。
function operatorFiniteState() {
  var menu = {   
    // 当前状态
    currentState: 'hide',
    // 绑定事件
    initialize: function() {
    // 当前状态
    currentState: 'hide',
    
    // 绑定事件
    initialize: function() {
    var self = this;
    self.on("click", self.transition);
  },

  // 状态转换
  transition: function(event){
    switch(this.currentState) {
      case "hide":
        this.currentState = 'show';
          doSomething();
          break;
      case "show":
        this.currentState = 'hide';
        doSomething();
        break;
      default:
        console.log('Invalid State!');
        break;
        }
      }
    }
}




/**
 * ############################################################
 * ######################    原型   ############################                                                       
 * ############################################################
 */

// 原型是 JavaScript 面向对象特性中重要的概念，在绝大多数的面向对象语言中，对象是基于类的（例如 Java 和 C++ ），对象是类实例化的结果。
// 而在JavaScript 语言中，没有类的概念①，对象由对象实例化。打个比方来说，基于类的语言中类就像一个模具，对象由这个模具浇注产生，
// 而基于原型的语言中，原型就好像是一件艺术品的原件，我们通过一台 100% 精确的机器把这个原件复制出很多份。

// 构造函数内定义的属性继承方式与原型不同，子对象需要显式调用父对象才能继承构造函数内定义的属性。
// 构造函数内定义的任何属性，包括函数在内都会被重复创建，同一个构造函数产生的两个对象(不共享实例)。
// 构造函数内定义的函数有运行时闭包的开销，因为构造函数内的局部变量对其中定义的函数来说也是可见的。
function person() {}
  person.prototype.name = 'BYVoid';
  person.prototype.showName = function () {
  console.log(this.name);
};

var person = new Person();
person.showName();

// 原型和构造函数区别
// 除非必须用构造函数闭包，否则尽量用原型定义成员函数，因为这样可以减少开销。
// 尽量在构造函数内定义一般成员，尤其是对象或数组，因为用原型定义的成员是多个实例共享的。
// 可以理解为Python的类实例和对象实例的属性区别，区别在于一个可以共享内部属性一个不可以
function Foo() {
	var innerVar = 'hello';
	this.prop1 = 'BYVoid';
	this.func1 = function(){
		innerVar = '';
	};
}
Foo.prototype.prop2 = 'Carbo';
Foo.prototype.func2 = function () {
	console.log(this.prop2);
};
var foo1 = new Foo();
var foo2 = new Foo();
console.log(foo1.func1 == foo2.func1); // 输出 false
console.log(foo1.func2 == foo2.func2); // 输出 true







/**
 * ############################################################
 * ######################    继承   ############################                                                       
 * ############################################################
 */
// *注：JavaScript原本是没有继承概念的，可以通过原型链、构造函数或者两者结合方式实现


// 原型链
// 子函数的原型赋值为父函数的对象就可以实现继承，通过Student => Student.prototype => Person 访问
//父类型
function Person(name, age) {
  this.name = name,
  this.age = age,
  this.play = [1, 2, 3]
  this.setName = function () { }
}

Person.prototype.setAge = function () { }

//子类型
function Student(price) {
  this.price = price
  this.setScore = function () { }
}

Student.prototype = new Person() // 子类型的原型为父类型的一个实例对象
var s1 = new Student(15000)
var s2 = new Student(14000)
console.log(s1,s2)



const main = async () => {
  operatorArray();
}

main();
