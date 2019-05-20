var sim = sim || {};
sim.model = sim.model || {};
sim.scenario = sim.scenario || {};
sim.config = sim.config || {};

var oes = oes || {};
oes.ui = oes.ui || {};
oes.ui.explanation = {};

/*******************************************************
 Simulation Model
********************************************************/
sim.model.name = "得来速模拟";
sim.model.title = "得来速餐厅";
sim.model.systemNarrative = "<p>当汽车从街道进入驾驶时，驾驶员决定是否排队。 如果她决定离开餐厅，她就算是一个迷路的顾客。 如果她决定排队，她会等到菜单板可用。 那时，她给订单接受者下了订单。 下订单后，同时发生两件事：</p>"+
    "<ol><li>如果有空间，司机会向前移动，否则她必须在菜单板上等待，直到有空间向前移动。</li>"+
    "<li>订单被送回厨房准备，有些延迟。</li></ol>"+
    "<p>一旦司机到达取货窗口，她就会付钱并拿起食物，如果准备就绪的话。 如果食物尚未准备好，她必须等到她的订单送到取件窗口。</p>";
sim.model.shortDescription = "驱动器通过一个系统建模，在三个服务点执行订单处理活动，包括排队：菜单板上的订单，厨房的订单准备和取货窗口的订单取件。 该模型包括四种对象类型：MenuBoard，Kitchen，PickupWindow和Customer，一种事件类型：CustomerArrival，以及三种活动类型：OrderTaking，OrderPreparation和OrderPickup。 注意：在更现实的模型中，厨房中的订单队列将由几个厨房工作人员并行服务，这样他们就代表了OrderPreparation活动的资源。";
sim.model.source = "<a href='http://www.informs-sim.org/wsc08papers/005.pdf'>仿真模拟系统介绍（Introduction to Simulation）</a> " +
    "作者 R.G. Ingalls, 在 <em>2008年冬季仿真模拟大会活动（Proceedings of the 2008 Winter Simulation Conference）</em>论述";
sim.model.creator = "Gerd Wagner教授";

