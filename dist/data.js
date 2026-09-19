(function () {
  const activities = [
    {
      id: '01-09', originalIds: ['01', '09'], title: '“蓝桥杯”程序设计校内训练营', category: '学习分享', recordKind: '训练营',
      sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '首次训练：9月21日19:30', start: '2026-09-21T19:30:00+08:00', deadlineText: '9月24日22:00', deadline: '2026-09-24T22:00:00+08:00',
      location: '实验楼A402', audience: '全校学生', conditions: '零基础可参加', newcomerFriendly: true,
      summary: '补充通知已将首次训练从原计划的9月20日每周六19:00调整为9月21日19:30，地点改至实验楼A402。已报名同学无需重复提交，报名截止时间不变。',
      statusTags: ['报名中', '信息已更新'], statusCodes: ['open', 'updated'], completeness: '部分信息缺失', missing: ['报名入口', '完整训练周期'], riskLevel: 'none',
      updateSummary: '首次训练时间与地点已更新，报名截止时间不变。',
      notices: [
        { id: '01', type: '原通知', text: '9月24日22:00报名截止；原计划9月20日起每周六19:00训练；面向全校学生；零基础可参加。' },
        { id: '09', type: '补充通知', text: '首次训练改为9月21日19:30，地点改至实验楼A402；已报名同学无需重复提交；报名截止时间不变。' }
      ]
    },
    {
      id: '02', originalIds: ['02'], title: 'AI应用入门公开课', category: '学习分享', recordKind: '公开课', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '9月19日19:00，预计90分钟', start: '2026-09-19T19:00:00+08:00', location: '计算机学院教学楼（具体教室未提供）', audience: '全校学生', conditions: '无需报名', newcomerFriendly: true,
      summary: '面向全校学生的AI应用入门公开课，无需报名。', statusTags: ['今日活动'], statusCodes: ['today'], completeness: '部分信息缺失', missing: ['具体教室', '发布单位'], riskLevel: 'none', notices: []
    },
    {
      id: '03-20', originalIds: ['03', '20'], title: '大学生创新创业项目团队招募', category: '项目招募', recordKind: '团队招募', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '长期协作，每周投入4小时以上', deadlineText: '9月22日18:00', deadline: '2026-09-22T18:00:00+08:00', location: '未提供', audience: '未明确', conditions: '现主要招募设计与材料成员；需提交简短自我介绍', newcomerFriendly: false,
      summary: '开发方向名额已满，目前主要补充设计与材料成员。此前已投递者无需重复提交。', statusTags: ['报名中', '即将截止', '信息已更新'], statusCodes: ['open', 'closing', 'updated'], completeness: '部分信息缺失', missing: ['招募方', '项目详情', '投递入口'], riskLevel: 'none',
      updateSummary: '开发方向已满，招募重点调整为设计与材料成员。',
      notices: [
        { id: '03', type: '原通知', text: '招募开发、设计、材料成员；每周需稳定投入4小时以上；9月22日18:00截止；需提交简短自我介绍。' },
        { id: '20', type: '补充说明', text: '开发方向名额已满，现主要补充设计与材料成员；截止时间不变；此前已投递者无需重复提交。' }
      ]
    },
    {
      id: '04', originalIds: ['04'], title: '数学建模竞赛经验分享会', category: '学习分享', recordKind: '分享会', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '直播已于9月18日19:30结束', start: '2026-09-18T19:30:00+08:00', location: '线上直播（平台未提供）', audience: '不限专业', conditions: '回放预计9月20日上传', newcomerFriendly: true,
      summary: '直播已结束，活动方预计9月20日上传回放。', statusTags: ['等待回放'], statusCodes: ['replay'], completeness: '部分信息缺失', missing: ['回放平台', '回放链接', '准确发布时间'], riskLevel: 'none', notices: []
    },
    {
      id: '05', originalIds: ['05'], title: '校园公益志愿服务活动', category: '志愿实践', recordKind: '志愿活动', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '9月27日8:30—17:00', start: '2026-09-27T08:30:00+08:00', deadlineText: '9月20日12:00', deadline: '2026-09-20T12:00:00+08:00', location: '未提供', audience: '未明确', conditions: '预计服务8小时；需提前到场签到', newcomerFriendly: false,
      summary: '全天志愿服务活动，报名即将截止。', statusTags: ['报名中', '即将截止'], statusCodes: ['open', 'closing'], completeness: '关键信息缺失', missing: ['服务地点', '适用对象', '报名入口'], riskLevel: 'none', notices: []
    },
    {
      id: '06', originalIds: ['06'], title: 'Web开发零基础学习小组', category: '学习分享', recordKind: '周期小组', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '9月23日起每周三19:30，共6周', start: '2026-09-23T19:30:00+08:00', location: '未提供', audience: '零基础学生', conditions: '限30人；报名时间未注明，满员即止', newcomerFriendly: true,
      summary: '零基础学习小组，持续6周；是否仍有名额无法从题目判断。', statusTags: ['信息待确认', '满员即止'], statusCodes: ['uncertain', 'open'], completeness: '关键信息缺失', missing: ['报名截止时间', '当前人数', '地点', '报名入口'], riskLevel: 'none', notices: []
    },
    {
      id: '07', originalIds: ['07'], title: 'AI创新应用挑战赛', category: '比赛挑战', recordKind: '竞赛', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '9月21日18:00前意向登记；10月20日提交作品', deadlineText: '意向登记：9月21日18:00', deadline: '2026-09-21T18:00:00+08:00', location: '未提供', audience: '2—4人团队', conditions: '意向登记不等同于最终作品提交', newcomerFriendly: false,
      summary: '当前为校内意向登记阶段，最终作品提交时间为10月20日。', statusTags: ['报名中', '即将截止', '多阶段'], statusCodes: ['open', 'closing', 'multi_stage'], completeness: '部分信息缺失', missing: ['登记入口', '费用', '正式参赛流程'], riskLevel: 'none', notices: []
    },
    {
      id: '08', originalIds: ['08'], title: '校园软件项目组招募', category: '项目招募', recordKind: '团队招募', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '长期招募', location: '未提供', audience: '大一、大二学生', conditions: '希望了解Git基本操作；每周预计投入5小时；满员即止', newcomerFriendly: true,
      summary: '开发校园实用工具的长期团队招募。', statusTags: ['长期招募', '满员即止'], statusCodes: ['long_term', 'open'], completeness: '部分信息缺失', missing: ['具体项目', '负责人', '报名渠道', '剩余名额'], riskLevel: 'none', notices: []
    },
    {
      id: '10', originalIds: ['10'], title: '前端开发经验交流会', category: '学习分享', recordKind: '交流会', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '9月19日15:00—16:30', start: '2026-09-19T15:00:00+08:00', end: '2026-09-19T16:30:00+08:00', location: '线下A201，并同步线上直播', audience: '未明确', conditions: '无需报名', newcomerFriendly: false,
      summary: '线下交流并同步线上直播，状态应根据9月19日当天具体时刻判断。', statusTags: ['今日活动'], statusCodes: ['today', 'time_sensitive'], completeness: '部分信息缺失', missing: ['线上直播地址', '发布单位'], riskLevel: 'none', notices: []
    },
    {
      id: '11', originalIds: ['11'], title: '大学生科研入门分享会', category: '学习分享', recordKind: '分享会', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '9月21日19:00—20:30', start: '2026-09-21T19:00:00+08:00', location: '未提供', audience: '全校学生', conditions: '介绍论文检索、学生科研项目和导师联系方法', newcomerFriendly: true,
      summary: '面向全校学生的科研入门分享。', statusTags: ['即将开始', '信息待确认'], statusCodes: ['upcoming', 'uncertain'], completeness: '关键信息缺失', missing: ['地点', '是否需要报名'], riskLevel: 'none', notices: []
    },
    {
      id: '12', originalIds: ['12'], title: '全国高校计算机能力挑战赛', category: '比赛挑战', recordKind: '竞赛', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '报名截止：10月5日23:59', deadlineText: '10月5日23:59', deadline: '2026-10-05T23:59:00+08:00', location: '未提供', audience: '本科生', conditions: '个人参赛；费用信息未提供', newcomerFriendly: false,
      summary: '个人参赛的计算机能力挑战赛，不能判断是否免费。', statusTags: ['报名中', '费用待确认'], statusCodes: ['open', 'uncertain'], completeness: '部分信息缺失', missing: ['具体费用', '报名入口', '后续赛程'], riskLevel: 'none', notices: []
    },
    {
      id: '13', originalIds: ['13'], title: '科研助理招募', category: '项目招募', recordKind: '岗位招募', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '9月21日截止（具体时刻未提供）', deadlineText: '9月21日', deadline: '2026-09-21T23:59:00+08:00', location: '未提供', audience: '仅限大二及以上学生', conditions: '每周预计投入6小时；协助数据整理和实验工作', newcomerFriendly: false,
      summary: '仅面向大二及以上学生，不适用于大一新生。', statusTags: ['报名中', '即将截止', '截止时间待确认'], statusCodes: ['open', 'closing', 'uncertain'], completeness: '关键信息缺失', missing: ['具体截止时刻', '招募方', '项目详情', '投递方式'], riskLevel: 'none', notices: []
    },
    {
      id: '14', originalIds: ['14'], title: 'Git与GitHub零基础工作坊', category: '学习分享', recordKind: '工作坊', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '9月21日19:00—20:30', start: '2026-09-21T19:00:00+08:00', location: '未提供', audience: '主要面向大一新生', conditions: '限40人；需提前预约；提交报名表不代表录取，以审核通知为准', newcomerFriendly: true,
      summary: '适合大一新生，但预约后仍需等待审核结果。', statusTags: ['新生友好', '等待审核', '信息待确认'], statusCodes: ['newcomer', 'review', 'uncertain'], completeness: '关键信息缺失', missing: ['地点', '预约截止时间', '审核标准', '通知时间'], riskLevel: 'none', notices: []
    },
    {
      id: '15', originalIds: ['15'], title: 'AI应用创意挑战', category: '比赛挑战', recordKind: '竞赛', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '9月23日23:59前交方案；9月30日前交最终作品', deadlineText: '创意方案：9月23日23:59', deadline: '2026-09-23T23:59:00+08:00', location: '未提供', audience: '个人或团队', conditions: '进入展示环节后可再组队', newcomerFriendly: false,
      summary: '当前处于创意方案阶段，最终作品为第二个独立节点。', statusTags: ['报名中', '即将截止', '多阶段'], statusCodes: ['open', 'closing', 'multi_stage'], completeness: '部分信息缺失', missing: ['提交渠道', '展示时间', '详细规则'], riskLevel: 'none', notices: []
    },
    {
      id: '16', originalIds: ['16'], title: '校园摄影志愿者招募', category: '项目招募', recordKind: '志愿者招募', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '长期招募', location: '校内大型活动（具体地点随活动确定）', audience: '未明确', conditions: '有摄影设备者优先，但不是硬性要求', newcomerFriendly: false,
      summary: '长期招募校园活动摄影志愿者。摄影设备只是优先项。', statusTags: ['长期招募', '信息待确认'], statusCodes: ['long_term', 'uncertain'], completeness: '部分信息缺失', missing: ['报名截止时间', '招募方', '报名方式'], riskLevel: 'none', notices: []
    },
    {
      id: '17', originalIds: ['17'], title: 'Python程序设计学习资料合集', category: '学习分享', recordKind: '学习资源', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '资料长期开放；当前提取信息有效至9月22日', location: '线上资源', audience: '未明确', conditions: '包含课程、练习和项目案例', newcomerFriendly: true,
      summary: '资料长期开放，但当前网盘提取信息将在9月22日失效，后续将统一更新。', statusTags: ['长期有效', '提取信息即将失效'], statusCodes: ['long_term', 'closing'], completeness: '关键信息缺失', missing: ['网盘地址', '提取码', '后续更新方式'], riskLevel: 'none', notices: []
    },
    {
      id: '18', originalIds: ['18'], title: '网络安全兴趣交流小组', category: '学习分享', recordKind: '周期小组', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '首次：9月19日19:30；之后每两周一次', start: '2026-09-19T19:30:00+08:00', location: '未提供', audience: '对CTF、Web安全等方向感兴趣的学生', conditions: '不限基础', newcomerFriendly: true,
      summary: '今日首次交流，之后每两周开展一次。', statusTags: ['今日活动', '长期活动', '新生友好'], statusCodes: ['today', 'long_term', 'newcomer'], completeness: '部分信息缺失', missing: ['地点', '单次时长', '加入方式'], riskLevel: 'none', notices: []
    },
    {
      id: '19', originalIds: ['19'], title: '学生创新项目路演观摩', category: '校园活动', recordKind: '观摩活动', sourceType: 'unspecified', sourceLabel: '来源未明确', official: false, studentPublished: false,
      timeText: '9月20日14:30', start: '2026-09-20T14:30:00+08:00', deadlineText: '原报名已于9月18日22:00截止', deadline: '2026-09-18T22:00:00+08:00', location: '未提供', audience: '未明确', conditions: '如现场仍有余位，可接受候补入场；名额不保证', newcomerFriendly: false,
      summary: '报名已经截止，但活动尚未举行，现场有余位时可以候补。', statusTags: ['报名已截止', '可候补'], statusCodes: ['closed', 'waitlist'], completeness: '部分信息缺失', missing: ['活动地点', '候补名额', '候补确认方式'], riskLevel: 'none', notices: []
    },
    {
      id: '21', originalIds: ['21'], title: '计算机学院AI产品设计分享会', category: '学习分享', recordKind: '分享会', sourceType: 'college', sourceLabel: '计算机学院发布', official: true, officialScope: 'college', college: '计算机学院', studentPublished: false,
      timeText: '9月20日19:00', start: '2026-09-20T19:00:00+08:00', location: '明德楼B203', audience: '全校学生', conditions: '无需报名；座位有限，不能保证入场', newcomerFriendly: true,
      summary: '计算机学院发布的AI产品设计分享会，面向全校学生。', statusTags: ['即将开始', '无需报名', '座位有限'], statusCodes: ['upcoming'], completeness: '信息基本完整', missing: ['具体座位数量'], riskLevel: 'none', notices: []
    },
    {
      id: '22', originalIds: ['22'], title: '周末羽毛球约球', category: '学生发布', recordKind: '学生约局', sourceType: 'student', sourceLabel: '学生个人发布', official: false, studentPublished: true,
      timeText: '9月20日16:00', start: '2026-09-20T16:00:00+08:00', location: '场地待最终确认', audience: '计划6—8人', conditions: '费用AA，具体金额未提供', newcomerFriendly: false,
      summary: '学生个人发起的周末羽毛球约球。', statusTags: ['学生个人发布', '信息待确认'], statusCodes: ['student', 'uncertain'], completeness: '关键信息待确认', missing: ['最终场地', 'AA费用金额', '报名方式'], riskLevel: 'caution', riskLabel: '信息未完整确认', notices: []
    },
    {
      id: '23', originalIds: ['23'], title: 'AI工具交流搭子招募', category: '学生发布', recordKind: '学生交流', sourceType: 'student', sourceLabel: '学生个人发布', official: false, studentPublished: true,
      timeText: '拟于9月21日晚开展', start: '2026-09-21T19:00:00+08:00', location: '尚未确定', audience: '欢迎零基础学生', conditions: '报名后拉群', newcomerFriendly: true,
      summary: '学生个人发起，具体时间和地点均尚未确定。', statusTags: ['学生个人发布', '新生友好', '信息待确认'], statusCodes: ['student', 'newcomer', 'uncertain'], completeness: '关键信息待确认', missing: ['具体时间', '地点', '发布者身份信息'], riskLevel: 'caution', riskLabel: '参与前需二次确认', notices: []
    },
    {
      id: '24', originalIds: ['24'], title: '“校园兼职福利分享”', category: '学生发布', recordKind: '兼职信息', sourceType: 'student', sourceLabel: '学生个人发布', official: false, studentPublished: true,
      timeText: '未提供', location: '未提供', audience: '未明确', conditions: '声称“零门槛、日结”，要求添加私人微信获取详情', newcomerFriendly: false,
      summary: '缺少主办方、地点和完整内容，并要求转至私人微信沟通。', statusTags: ['高风险', '待核实'], statusCodes: ['risk', 'uncertain'], completeness: '关键信息严重缺失', missing: ['主办方', '地点', '时间', '完整内容'], riskLevel: 'high', riskLabel: '高风险／待核实', notices: []
    },
    {
      id: '25', originalIds: ['25'], title: '数码新品体验交流', category: '学生发布', recordKind: '推广信息', sourceType: 'student', sourceLabel: '学生个人发布', official: false, studentPublished: true,
      timeText: '未提供', location: '未提供', audience: '未明确', conditions: '正文主要介绍某商家优惠及购买链接', newcomerFriendly: false,
      summary: '标题为技术交流，但主要内容是商家优惠与购买链接。', statusTags: ['疑似商业推广', '信息待确认'], statusCodes: ['commercial', 'uncertain'], completeness: '关键信息严重缺失', missing: ['时间', '地点', '明确组织方'], riskLevel: 'high', riskLabel: '疑似商业推广', notices: []
    },
    {
      id: '26', originalIds: ['26'], title: '外国语学院校园语言角', category: '学习分享', recordKind: '交流活动', sourceType: 'college', sourceLabel: '外国语学院发布', official: true, officialScope: 'college', college: '外国语学院', studentPublished: false,
      timeText: '9月21日15:00', start: '2026-09-21T15:00:00+08:00', location: '未提供', audience: '全校学生', conditions: '自由交流；无需提前报名；场地容量有限', newcomerFriendly: true,
      summary: '外国语学院发布的校园语言角，面向全校学生。', statusTags: ['即将开始', '无需报名', '座位有限'], statusCodes: ['upcoming'], completeness: '关键信息缺失', missing: ['活动地点', '具体容量'], riskLevel: 'none', notices: []
    }
  ];

  // 题目分流规则：只有明确标注“学生个人发布”的内容属于同学活动；
  // 其余内容均归入官方活动，未给出具体学院的统一放入校级分类。
  activities.forEach(activity => {
    if (!activity.studentPublished && !activity.official) {
      activity.official = true;
      activity.officialScope = 'school';
      activity.sourceType = 'school';
      activity.sourceLabel = '校级活动（具体发布单位未提供）';
    }
  });

  window.CAMPUS_DATA_REFERENCE_DATE = '2026-09-19';
  window.CAMPUS_ACTIVITIES = activities;
})();
