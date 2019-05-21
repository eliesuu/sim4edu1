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
sim.model.name = "柠檬状态-1(LemonadeStand-1)";
sim.model.title = "一个制造公司的柠檬状态";
sim.model.systemNarrative = "<p>一个在球场的柠檬水销售商，做柠檬水并且用纸杯在街道市场的摊位售卖。 每天包含以下流程步骤和阶段：</p>" +
    "<ol><li>这一天从制定计划决策（需求预测，生产计划和销售价格计划）和购买所需的输入材料（柠檬，糖等）开始。</li>" +
    "<li>一段时间后，交付订购的输入材料，生产计划数量的柠檬水并打开支架。</li>" +
    "<li>然后，顾客随意到达并订购一杯柠檬水。 只要库存中仍有柠檬水，就可以获得客户订单。</li>" +
    "<li>在一天结束时，柠檬水摊位关闭，剩余的柠檬水和过期的输入物品被倾倒。</li></ol>" +
    "<p>这个<a href='https://en.wikipedia.org/wiki/Lemonade_Stand'>柠檬状态游戏</a> 由Bob Jamison于1973年开发，用于大型计算机，后来于1979年移植到Apple II平台，并于20世纪80年代由Apple分销。</p>";
sim.model.shortDescription = "<p>柠檬水摊位可以通用方式建模为单个产品制造公司的实例，该公司使用输入库存并将输入项目转换为输出项目（产品）。 我们制作了一系列三个日益复杂的柠檬水摊位模型：</p>" +
    "<ol><li>在基本模型中，我们建立一个只有一个柠檬水摊位（垄断）的场景，我们从市场条件，客户和个人客户订单以及供应商，个人补货订单和相应的交货，库存管理，营销活动和 竞争。 客户订单汇总为随机的每日需求数量。 汇总补货订单直接转换为相应的每日交货。 由于每日交付可靠，因此无需进行库存管理。</li>" +
    "<li>在第二个模型中，我们考虑个人（可能是延迟的）交付，库存管理和由天气主导的市场条件。</li>" +
    "<li>在第三个模型中，我们考虑个人客户，我们建立了一个场景，其中有几个相互竞争的柠檬水摊位。</li>" +
    "</ol>";
sim.model.creator = "Gerd Wagner教授";
sim.model.contributors = "许可";
