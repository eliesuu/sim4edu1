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
      "<p>除了这些一般信息建模问题外，还有一个几个特定于模拟建模的问题: " +
      "</b> <ol> </b>如果模拟是要处理<b>空间中的对象 </b>，" +
      "那么设计模型必须是基于<b>空间模型 </b>的选择:一维（1D）离散空间， " +
      "二维（2D）离散空间（也称为<b>网格空间</b>），三维（3D）离散空间和1D / 2D / 3D连续空间。" +
      "所选空间模型意味着相应的形式空间<b>位置:整数或十进制数的1,2或3元组。 " +
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
    "Model name: " : "模型名称: ",
    ", available on <a href='https://sim4edu.com'>Simulation-for-Education</a>.": ", 适用于 <a href='https://sim4edu.com'>教育模拟（Simulation-for-Education）</a>.",
    "Based on " :  "基于 ",
    "Copyright " :  "版权翻译",
    "), created on " :  "), 创建于 ",
    " with the <i>Object Event " :  " 连同对象事件模拟（ <b>Object Event ",
    "Simulation (OES)</i> framework <a href='https://www.sim4edu.com/downloads'>OESjs</a>," :  " Simulation (OES)</b>） 框架 <a href='http://www.sim4edu.com/downloads'>OESjs</a>, ",
    " last modified on " :  " 最新编辑于",
    " | <a href='https://sim4edu.com/credits.html'>OESjs Credits</a>" :  " | <a href='https://sim4edu.com/credits.html'>OESjs 贡献声明</a>",
    "Model Description" : "模型描述",
    "System Narrative" : "系统叙述",

    // 2. Translation Object for simulator-core.js
    "Initial Objects" : "初始对象", 
    "Initial Events" : "初始事件", 
    "Apply changes" : "应用更改", 
    "Run Scenario" : "运行场景", 
    "+Experiment" : "+实验", 
    "Define an experiment" : "定义一个实验", 
    "Default scenario" : "默认情景", 
    "Model Variables": "模型变量", 
    "Experiments" : "实验", 
    "Space" : "空间", 
    "Space Size" : "空间尺寸",
    "Read more...": "阅读更多......", 
    "University": "大学", 
    "Input Queue" : "输入队列", 
    "Values": "值", 
    "Model name": "型号名称", 
    "Scenario number": "情景编号", 
    "Experiment number": "实验编号", 
    "The sequence number relative to the underlying simulation scenario": "相对于基础模拟场景的序列号", 
    "Experiment title": "实验标题", 
    "Number of replications": "复制次数", 
    "Parameter definitions": "参数定义", 
    "Experiment def.": "实验定义", 
    "ID": "编号",
    "Date/time": "日期/时间",
    "Output statistics": "输出统计",
    "End time:" : "结束时间:",
    "Set simulation end time": "设置模拟结束时间",
    "Name": "名称",
    "Scenario name": "场景名称",
    "Title": "标题",
    "Scenario title": "情景标题",
    "Scenario description": "场景描述",
"Short description of the simulation scenario": "模拟场景的简短描述",
"Creator": "创建者",
"Created on": "创建于",
    "Creator of simulation model": "模拟模型的创造者",
    "Creation date": "创作日期",
    "Modified on": "修改于",
    "Modification date": "修改日期",
    "ID counter": "编号计数器",
    "Random seed": "随机种子",
    "Automatically assigned sequence number for experiment": "自动为实验分配序列号",
    "Number of replications/repetitions per experiment scenario": "每个实验场景的重复/重复次数",
    "Experiment parameters": "实验参数",
    "Define experiment parameters by name and value set specification": "按名称和值集规范定义实验参数",
    "Log": "日志",
    "Create simulation log (y/n)": "创建模拟日志（y / n）",
    "Visualization": "可视化",
    "Enable the visualization of a simulation run": "启用模拟运行的可视化",
    "Step duration:": "步骤持续时间:",
    "How long is a simulation step to take?": "模拟步骤需要多长时间？",
    "User-interactive": "用户交互",
    "Step:": "步骤:",
    "Simulation step": "模拟步骤",
    "Time:": "时间:",
    "Simulation time": "模拟时间",
    "Model title": "模型标题",
    "Model description": "型号说明",
    "Short description of the simulation model": "模拟模型的简短描述",
    "System narrative": "系统叙事",
    "Narrative of the system under investigation": "正在调查的系统的叙述",
    "License": "许可证",
    "Time model": "时间模型",
    "Either 'discrete' (default) or 'continuous'": "要么“离散”（默认）要么“连续”",
    "Time unit": "时间单位",
    "A time unit like 'ms', 's' or 'm'": "时间单位如“ms”，“s”或“m”",
    "Time increment": "时间增量",
    "Object types": "对象类型",
    "Event types": "事件类型",
    "Activity types": "活动类型",
    "Space type": "空间类型",
    "Space geometry": "空间几何",
    "Width": "宽度",
    "Maximum x value": "最大x值",
    "Height": "高度",
    "Maximum y value": "最大y值",
    "Depth": "深度",
    "Maximum z value": "最大z值",
    "Editable properties": "可编辑属性",
    "Average": "平均",
    "Std.dev.": "标准差",
    "Minimum": "最小",
    "Maximum": "最大",
    "Arrived objects": "到达对象",
    "Departed objects": "离开对象",
    "Mean time in system": "系统的平均时间",
    "Occ. time": "Occ. time",
    "Processing Node": "进程节点",
    "Entry Node": "入口节点",
    "Processing Activity": "进程活动",
    "Exit Node": "出口节点",
    "Arrival": "到达",
    "time": "时间",

 // 3. Translation Object for simulation-worker-core.js
    
    "arrT": "到达时间",
    "true": "为真",
    "PN": "进程节点",
    "Proc": "进程",
    "Entry": "入口",
    "Exit": "出口",
 
    //space-core.js
    "Position": "位置",
    // sims index
    "Narrative" : "叙事",
    "Description": "说明",
    "Code": "代码",
  
    //Loadmanager.js
    "Please wait, we are loading the simulation data...": "请等一下，我们正在加载模拟数据......",
    "The file: '": "文件:“",
    "' was not found!": "”没找到！",
    "Loading: ": "正在加载:",

    //sims/13/label
    "Order event rate": "订单事件率",
    "orderExit": "订单出口",
    "orderEntry": "订单入口",
    "Revenue per order": "每个订单的收入",
    "Backlog costs": "积压成本",
    "Backlog costs per order and timeUnit": "每个订单的积压成本和时间单位",
    "Manuf. costs per order": "每个订单的制造成本",
    "Revenue": "收入",
    "T€": "千欧",
    "A Processing Network Model of Four Consecutive Machines" : "四连续自动机进程网络模型",
    "M1" : "机器1",
    "M2" : "机器2",
    "M3" : "机器3",
    "M4" : "机器4",

    //sims/1/
    "Service desk" : "服务前台",
    "Queue length" : "队列长度",
    "Arrived customers": "到达的客户",
    "Departed customers" : "离开的客户",
    "Service utilization": "服务利用率",
    "Max. queue length": "最大队列长度",
    "Avg. queue length": "平均排队长度",
    "Queue length": "队列长度",
    "serviceDesk1": "服务前台1",
    "CustomerArrival" : "顾客抵达",
    "Arr" : "到达",
    "CustomerDeparture" : "顾客离开",
    "A Service Queue Model with Utilization and Maximum Queue Length Statistics":"具有利用率和最大队列长度统计信息的服务队列模型",
    "Dep": "离开",
    "serviceDesk1": "服务前台1",
    
 
    //sims/2/
    "arrivalEventRate": "事件到达率",
    "Time in system": "系统时间",
    "Arrival time by cust.": "通过托管到达时间",
    "Arrival event rate": "到达事件率",
    "A Queueing System with Mean Response Time Statistics" : "一种具有均值响应时间统计量的排队系统",
    //sims/3/
    "Max. queue length": "最大队列长度",
    "sd1": "服务前台1",
    "An Activity-Based Service Queue Model" : "基于活动的服务队列模型",
    "Cust": "顾客",
    "Arrival time": "到达时间",
    "PerformService": "服务表现",
    "Service": "服务",

  
    //sims/4/
    "Stock": "股",
    "Avg. inventory": "平均库存",
    "Lost": "损失",
    "shop": "商店",
    "Quantity": "数量",
    "SingleProductShop" : "单产品商店",
    "Inventory Management with a Continuous Replenishment Policy" : "采用持续补货政策的库存管理",

    
    //sims/6/
    "Neigborhood radius": "邻居半径",
    "Population density": "人口密度",
    "Tolerance level": "容忍程度",
    "GroupOfResidents" : "居民组",
    "Residents gone": "居民离开",
    "Uncontent residents": "不满意的居民",
    "The Schelling Segregation Model" : "谢林隔离模型",

    
    //sims/9/
    "Average time in system": "系统中的平均时间",
    "An Activity-Based Model of Consecutive Services" : "基于活动的连续服务模型",
      "rec": "接待",
    "caseH": "案件处理",
    
    //sims/10/
    "mb": "菜单",
    "ki": "厨房",
    "pw": "拿取窗口",
    "Customer" : "顾客",
    "Lost customers": "失去的客户",
    "Lost revenue": "收入损失",
    "Drive Through Restaurant" : "得来速餐厅",
     "Kitchen": "厨房",
    "Waiting Orders": "等待订单",
    "Waiting customers": "等待顾客",
    "MenuBoard": "菜单版面",
    "OrderPickup": "订单拿取",
    "OrderPreparation": "订单准备",
    "OrdPrep": "订单准备",
    "OrderTaking": "订单带走",
    "OrdTak": "订单带走",
    "PickupWindow": "拿取窗口",

    //sims/11/
  
    "receptDesk": "前台接待",
    "caseDesk": "前台案件",
    "A Processing Network Model of Two Consecutive Services" : "两种连续服务的处理网络模型",

 
    //sims/12/
    "custEntry": "顾客入口",
    "custExit": "顾客出口",
    "A Processing Network Model of a Service Desk" : "服务台的处理网络模型",

   
    //sims/14/
    "A Service Queue Model with Queue Length Statistics" : "具有队列长度统计的服务队列模型",


    //sims/15/
    "3D Solar System" : "3D 太阳系",
    "by" : "由",
    "Sun" : "太阳",
    "Mercury" : "水星",
    "Venus" : "金星",
    "Earth" : "地球",
    "Mars" : "火星",
    "Jupiter" : "木星",
    "Saturn" : "土星",
    "Uranus" : "冥王星",
    "Neptune" : "海王星",
    "Speed" : "速度",
    "Size" : "大小",
    "Distance" : "距离",
    "Orbit Velocity" : "轨道速度",
    "Equatorial Circumference" : "赤道周长",
    "From Sun" : "距离太阳",
    "From Earth" : "距离地球",

    
    //sims/16/
    "A Cellular Automata Model for the Problem of Spreading Gossip" : "八卦新闻传播的元胞自动机",

    
    //sims/17/
    "Daily revenue": "每日收入",
    "Lost sales": "销售额下降",
    "DailyDelivery": "每日送货",
    "Del": "送货",
    "DailyDemand": "每日需求",
    "Dem": "需求",
    "EndOfDay": "当日结束",
    "EoD": "当日结束",
    "InputItemType": "输入项目类型",
    "Purchase price per supply unit": "每个供应单位的购买价格",
    "ItemType": "项目类型",
    "Item name": "项目名称",
    "OutputItemType": "输出项目类型",
    "Sales price": "售卖价格",
    "LemonadeStand": "柠檬库存",
    "Stand": "库存",
    "Lemonade": "柠檬",
    "Lem": "柠檬",
    "ltr": "升",
    "Lemon": "柠檬",
    "pc": "块",
    "bag": "包",
    "Water": "水",
    "bottle": "瓶",
    "IceCubes": "冰块",
    "Sugar": "糖",
    "kg": "千克",
    "PaperCup": "纸杯",
    "box": "盒",
    "SingleProductCompany": "单产品公司",
    "StartOfDay": "当日开始",
    "SoD": "当日开始",


    //sims/18/
    "Planned sales price ($)": "计划销售价格（$）",
    "Planned prod. quantity": "计划产品数量",
    "Temperature forecast": "温度预报",
    "The temperature forecast for today": "今天的温度预报",
    "Weather forecast": "天气预报",
    "The weather forecast for today": "今天的天气预报",
    "How the temperature was in the past days": "过去几天气温如何",
    "Temperature history (°C)": "温度历史（°C）",
    "How the weather was in the past days": "过去几天天气如何",
    "Weather history": "天气历史",
    "How much cash has been earned in the past days": "过去几天赚了多少现金",
    "Revenue history ($)": "收入历史（$）",
    "How many cups of lemonade have been sold in the past days": "过去几天卖了几杯柠檬水",
    "Demand history (cups)": "需求历史（杯子）",
    "Daily profit": "每日利润",
    "Just-in time delivery?": "准时交货？",
    "Reorder point (in qty.units)": "重新订购点（在数量单位中）",
    "Reorder period (in #days)": "重新订购期间（按天）",
    "Target inventory (in qty.units)": "目标库存（在数量单位中）",
    "Purchase price (per supply unit)": "购买价格（每个供应单位）",
    "Lost sales": "销售额下降",
    "DailyDemandMarket": "每日需求市场",
    "DailyProduction": "每日产品",
    "Prod": "产品",
    "Delivery": "送货",
    "Del": "送货",
    "LemonadeMarket": "柠檬市场",
    "Product category": "产品目录",
    "ProductCategory": "产品目录",
    "Daily demand market": "每日需求市场",
    "Market": "市场",
    "DD": "每日需求",
    "quant": "数量",
    "stock": "股",



    //sims/19/
    "TV": "电视",
    "Inventory Management with a Periodic Replenishment Policy" : "采用定期补货政策的库存管理",
    "TV Shop": "电视商店",

    //sims/20/
    "The number of (work) days of a month": "一个月的（工作）天数",
    "EachDay": "每天",
    "D": "天",
    "EndOfMonth": "月末",
    "EM": "月末",
    "Firm": "公司",
    "Household": "家庭",
    "F": "公司",
    "HH": "家庭",
    "n": "钱",
    "money": "钱",
    "StartOfMonth": "月始",
    "BM": "月始",

    
    //sims/21/
    "Free Mafiosi": "自由的黑手党",
    "notProducedProducts": "非生产商品",
    "Profit": "利润",
    "AppraiseTransaction": "评估交易",
    "At": "评估交易",
    "Assist": "助理",
    "A": "助理",
    "Benefit": "效益",
    "B": "效益",
    "CheckPayment": "检查支付",
    "Cp": "检查支付",
    "ConsiderPayPizzo": "考虑支付保护费",
    "Cpp": "考虑支付保护费",
    "ConsiderReportPizzo": "考虑报告保护费",
    "Rp": "考虑报告保护费",
    "ConsiderReportPunishment": "考虑报告惩罚",
    "Rpp": "考虑报告惩罚",
    "DemandPizzo": "需求保护费",
    "Dp": "需求保护费",
    "EndGenInv": "一般调查结果",
    "Egi": "一般调查结果",
    "EndSpecInv": "具体调查结果",
    "Esi": "具体调查结果",
    "Entrepreneur": "企业家",
    "Mafia": "黑手党",
    "ProduceProducts": "生产产品",
    "Pps": "生产产品",
    "Punish": "惩罚",
    "P": "惩罚",
    "PurchaseRequest": "采购申请",
    "Pr": "采购申请",
    "ReleasePrison": "释放个人",
    "RP": "释放个人",
    "ReminderDemand": "提醒需求",
    "Rd": "提醒需求",
    "ReminderGenInv": "一般调查提醒",
    "Rgi": "一般调查提醒",
    "ReminderPurchase": "提醒购买",
    "Rp": "提醒购买",
    "mafia": "黑手党",
    "state": "州",
    "entrepreneur": "企业家",
    "customer": "顾客",
    "State": "周",
    "Trial": "审讯",
    "T": "审讯",
    
    
    
    //sims/24/
    "Departed products": "离开的产品",
    "Arrived parts": "到达的部分",
    "Failure recurr. mean (hrs.)": "失败复发 平均（小时）",
    "Arrival recurr. mean (min.)": "到达复发 平均（分钟）",
    "The mean time between part arrivals (in minutes)": "部分到达之间的平均时间（以分钟为单位）",
    "min": "分",
    "Work station": "工作站",
    "productExit": "产品出口",
"Breakdown": "分解",
    "BrkDwn": "分解",
    "RepairEnd": "修复结束",
    "RprEnd": "修复结束",
    "WS1": "节点1",
    "WS2": "节点2",
    "WS3": "节点3",
    "productExit": "商品出口",
    "partEntry": "部分入口"

}