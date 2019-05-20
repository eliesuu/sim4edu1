oes.ui.i18n.translations = {
  "expl-CM": "<dfn>概念模型</dfn>，也称为<b>域模型</b>，通过识别对象和事件的相关类型以及描述来描述正在研究的<b>系统</b> 他们的动态，让我们了解系统中正在发生的事情。",
  "expl-CIM": "<p> <b>概念信息模型</b>以半正式方式描述，例如在系统叙述中使用的主题词汇。" +
      "这样的词汇表基本上由</p> <ul> </b> <strong>类型</strong>的名称组成，" +
      "对应于面向对象建模中的<b>类</b>，或<b>一元谓词</b>在形式逻辑中，</b> </b> <strong>属性</strong>对应 " +
      "于形式逻辑中的<b>二元谓词</b>，<strong>关联</strong> 在形式逻辑中对应于 " +
      "<b> n-ary谓词</b>（带有<b> n </b>> 1）。</b> </ul> <p>类型的主要类别是<b> 对象类型</b>和<b>事件类型</b>。 " +
      "概念信息模型的简单形式是通过提供每个概念信息模型的列表来获得的，" +
      "而更精细的模型，最好是以UML类图的形式，也定义属性和关联，包括<strong>参与</strong> 事件（某些类型） " +
      "中的对象（某些类型）。</p>",
  "expl-CPM": "<p>一个<b>概念流程模型</b>应包括概念信息模型中标识的事件类型， "+
      "并基于条件和并行分支描述可能发生的时间序列事件。 "+
      "我们可以通过以<b> 事件规则</b>的形式为每个事件类型描述与之关联的<b>因果规律性</b>来实现此目的。 "+
      "定义由该类型的事件引起的<b>状态更改</b>和<b> 后续事件</b>。 " +
      "</ol>为简单起见，我们可能会合并这些类型的事件，这些事件可以被认为是暂时重合的。只要事件无条件地导致紧接着的后续事件， " +
      "就会出现这种情况。</p> <p>概念流程模型可以以<b>事件规则表的形式定义" +
      "</b>或以BPMN流程图的形式显示事件规则。</p>",
  "expl-DM": "模拟<b>设计模型</b>定义了基于概念模型的模拟的计算设计。 与概念模型不同，" +
      "设计是针对模拟项目的目的而定制的，例如，用于回答社会系统分析项目或技术系统工程项目中的某些研究问题， " +
      "或用于教授教育模拟中的系统的某些事实项目。 尽管设计模型独立于特定技术平台，" +
      "但它通常基于面向对象的建模（例如，使用UML图）。 它可以通过任何特定的技术选择以不同的方式实现，" +
      "通常使用面向对象的编程方法。",
  "expl-IDM": "<p>一个<b>信息设计模型</b>通常来自概念信息模型<b> 选择与设计相关的类型</b>对象和事件，" +
      "并用设计细节丰富它们，同时删除与仿真设计不相关的其他对象类型和事件类型。 " +
      "添加设计细节包括指定<b>属性范围</b>以及添加多重性和其他类型的<b>约束 </b>。 " +
      "<p>除了这些一般信息建模问题外，还有一个几个特定于模拟建模的问题： " +
      "</b> <ol> </b>如果模拟是要处理<b>空间中的对象 </b>，" +
      "那么设计模型必须是基于<b>空间模型 </b>的选择：一维（1D）离散空间， " +
      "二维（2D）离散空间（也称为<b>网格空间</b>），三维（3D）离散空间和1D / 2D / 3D连续空间。" +
      "所选空间模型意味着相应的形式空间<b>位置：整数或十进制数的1,2或3元组。 " +
      "</b> 信息设计模型必须区分<b>外源 </b>和<b>导致（或内生）</b>事件类型。 " +
      "对于任何外生事件类型，必须指定该类型事件的<b>重现 </b>，通常以随机变量的形式，" +
      "但在某些情况下，它可能是常量（比如'每个星期一'）。重复定义给定类型的两个连续事件 " +
      "（它们的发生时间）之间经过的时间。它可以在事件类中以特殊方法的形式在预定义名称“recurrence”中指定。</li>" +
      "某些模拟变量可能会随机变化，因此它们可以被认为是<b>随机变量 </b>， " +
      "其基础概率分布由相应的方法定型«rv»采样，用于将其归类为<b>随机变量抽样方法</b>。 " +
      "通过在方法定义子句中附加符号表达式，表示分布（带参数值）， " +
      "可以在模型图中指示基础概率分布。例如，<b> U（1,6）</b>可以表示具有下界1和上界6的均匀分布， " +
      "而<b> Exp（1.5）</b>可以表示具有事件率的指数分布1.5。 </ol> ",
  "expl-PDM": "在<b>流程设计模型</b>中，我们改进了概念流程模型。" +
      "我们可以通过识别那些导致因果关系的事件来实现这一点。" +
      "触发因果规律性的相关状态变化和后续事件。在信息模型中建模的任何事件类型都可能触发因果规律。 " +
      "但是，为简单起见，我们可以省略那些类型的事件，可以认为这些事件在时间上与 另一种类型的事件。" ,
  "Back to simulation": "返回模拟",
  "with contributions by": "贡献提供由",
  "Artwork Credits": "资料参考",
  "Model name": "模型名称",
  "available on": "适用于",
  "Based on": "基于",
  "Copyright": "版权",
  "created on": "创建于",
  "with the": "连同",
  "<i>Object Event Simulation (OES)</i> framework": "<b>对象时间模拟（OES）</b>框架",
  "last modified on": "最后编辑于",
  "OESjs Credits": "OESjs 资料参考",
  "System Narrative": "系统叙述",
  "Model Description": "模型描述",

  //========== index.html ==========================================================
  "sim4eduinfo": "通过 <i>对象事件模拟-(OES)</i> 的框架 <b><i>OESjs</i></b>产生，查看此框架于 <a href='https://sim4edu.com'>sim4edu.com</a>.",
  "Read more...": "阅读更多...",
  "Narrative": "叙事",
  "Description": "描述",
  "Code": "编码",
  "Space": "空间",
  "Show code of...": "显示代码...",
  "-- choose file --": "-- 选择文件 --",
  "Or <a>download all</a>": "或者 <a>下载所有</a>",
  "Download simulation code": "下载模拟程序代码 ",
  "JavaScript code of ": "JavaScript代码 ",
  "Default scenario": "默认场景",
  "Space Size": "空间大小",
  "Apply changes": "应用更改",
  "Run simulation scenario": "运行模拟场景",
  "Execute a single simulation step": "执行一个模拟步骤",
  "Stop simulation": "停止模拟",
  "Continue simulation": "模拟继续",
  "Restart simulation": "重启模拟",
  "Experiment": "实验",
  "Run experiment": "运行实验",
  "Experiments": "实验",
  "+Experiment": "添加实验",
  "Define an experiment": "定义一个实验",
  "Experiment scenario": "实验场景",
  "Parameter values": "参数值",
  "Statistics": "统计",
  "Replication": "复制",
  "Experiment Log": "实验日志",
  "Simulation Log": "模拟日志",
  "Time": "时间",
  "System State": "系统状态",
  "Future Events": "未来事件",
  "Model Variables": "模型变量",
  // "Define/set variables that can be used, for instance, in the initial state or as parameters in functions or in an experiment."
  "ModelVariablesUI hint": "定义/设置可以使用的变量，例如，在初始状态下，或作为函数或实验中的参数。",
  // "Change initial attribute values of objects - as a part of the initial state"
  "Initial Objects": "初始对象",
  "InitialStateObjectsUI hint": "改变对象的初始值 - 作为初始状态",
  "Initial Events": "初始事件",
  // "Change initial attribute values of events - as a part of the initial state"
  "InitialStateEventsUI hint": "改变事件的初始属性值 - 作为初始状态",
  // "An experiment is defined on top of a scenario by defining (1) the number of replications, " +
  //        "(2) zero or more experiment parameters (bound to model variables), and " +
  //        "(3) possibly a list of seed values, one for each replication."
  "experimentsUI hint": "一个基于场景的实验通过三个输入来进行定义: " +
      "(1) 复制次数, (2) 实验参数列表 (与模型变量绑定), 和 " +
      "(3) 一个可能的种子值列表，每个复制一个。",
  //***** labels and hints for properties of predefined OES objects *****
  "Occ. time": "事件时间",
  "Duration:": "持续时间:",
  "Simulation duration": "模拟持续时间",
  "Log": "日志",
  "Create simulation log? (yes/no)": "创建一个模拟日志? (是/否)",
  "Visualization": "可视化",
  "Visualize a simulation run? (是/否)": "可视化模拟运行? (是/否)",
  "Step duration:": "步骤持续时间:",
  "How long is a simulation step to take? [ms]": "模拟步骤需要多长时间 [ms]",
  "User-interactive": "用户互动",
  "Enable user interactions? (yes/no)": "启用用户互动? (是/否)",
  "Step:": "步骤:",
  "Simulation step": "模拟步骤",
  "Time:": "时间:",
  "Simulation time": "模拟时间",
  "Width": "宽",
  "Maximum x value": "x的最大值",
  "Height": "高",
  "Maximum y value": "y 的最大值",
  "Depth": "深",
  "Maximum z value": "z 的最大值",
  "Number of replications": "覆盖数量",
  "Experiment parameters": "实验参数",
  "Values": "值",
  "Resource Utilization": "资源使用",
  "Executing the simulation scenario...": "正在执行模拟仿真场景...",
  "Executing simulation experiment...": "正在执行模拟仿真实验..."

  // "": "",
  // "": "",
  // "": "",
  // "": "",
  // "": "",

};