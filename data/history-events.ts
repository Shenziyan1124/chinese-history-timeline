export interface HistoricalEvent {
  id: string;
  period: "ancient" | "medieval" | "modern" | "contemporary";
  year: string;
  title: string;
  description: string;
  videoUrl: string;
  videoTime: number;
  timelinePosition: string;
}

export const historyEvents: HistoricalEvent[] = [
  // 古代史
  {
    id: "ancient-1",
    period: "ancient",
    year: "约前2070年",
    title: "夏朝建立",
    description:
      "禹建立夏朝，这是中国历史上第一个世袭制朝代，标志着原始社会的结束和奴隶社会的开始。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 20,
    timelinePosition: "0%",
  },
  {
    id: "ancient-2",
    period: "ancient",
    year: "约前1600年",
    title: "商朝建立",
    description:
      "商汤灭夏桀，建立商朝，定都亳。商朝是中国历史上第二个朝代，已有成熟的文字系统（甲骨文）。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 496,
    timelinePosition: "16.67%",
  },
  {
    id: "ancient-3",
    period: "ancient",
    year: "前1046年",
    title: "武王伐纣，西周建立",
    description:
      "周武王姬发率领诸侯联军击败商纣王，建立周朝，定都镐京，史称西周，实行分封制。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 1140,
    timelinePosition: "33.33%",
  },
  {
    id: "ancient-4",
    period: "ancient",
    year: "前770年",
    title: "平王东迁，东周开始",
    description:
      "周平王将都城从镐京迁至洛邑，开启东周时期，分为春秋和战国两个阶段，诸侯争霸局面形成。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 1696,
    timelinePosition: "50%",
  },
  {
    id: "ancient-5",
    period: "ancient",
    year: "前221年",
    title: "秦始皇统一中国",
    description:
      '秦王嬴政灭六国，完成统一，建立秦朝，自称"始皇帝"，实行郡县制，统一文字、货币和度量衡。',
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 2426,
    timelinePosition: "66.67%",
  },
  {
    id: "ancient-6",
    period: "ancient",
    year: "前202年",
    title: "汉朝建立",
    description:
      '刘邦击败项羽，建立汉朝，定都长安，史称西汉，开创了"文景之治"和"汉武盛世"，是中国历史上强盛的朝代之一。',
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 2854,
    timelinePosition: "83.33%",
  },
  {
    id: "ancient-7",
    period: "ancient",
    year: "25年",
    title: "东汉建立",
    description:
      '刘秀建立东汉，定都洛阳。东汉延续了汉朝的辉煌，出现了"光武中兴"等盛世，促进了丝绸之路的繁荣。',
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 3651,
    timelinePosition: "100%",
  },

  // 中古史
  {
    id: "medieval-1",
    period: "medieval",
    year: "581年",
    title: "隋朝建立",
    description:
      "杨坚建立隋朝，统一分裂已久的中国，开创三省六部制，开凿大运河，对后世影响深远。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 7229,
    timelinePosition: "0%",
  },
  {
    id: "medieval-2",
    period: "medieval",
    year: "618年",
    title: "唐朝建立",
    description:
      '李渊建立唐朝，是中国历史上最强盛的朝代之一，出现了"贞观之治"和"开元盛世"，文化经济高度繁荣。',
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 7485,
    timelinePosition: "16.67%",
  },
  {
    id: "medieval-3",
    period: "medieval",
    year: "960年",
    title: "宋朝建立",
    description:
      "赵匡胤发动陈桥兵变，建立宋朝，定都开封，史称北宋。宋朝是中国古代商品经济最发达的时期，科技文化繁荣。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 8975,
    timelinePosition: "33.33%",
  },
  {
    id: "medieval-4",
    period: "medieval",
    year: "1127年",
    title: "靖康之耻，南宋建立",
    description:
      "金军攻破开封，俘虏徽钦二帝，北宋灭亡。赵构在临安（今杭州）建立南宋，偏安江南。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 9335,
    timelinePosition: "50%",
  },
  {
    id: "medieval-5",
    period: "medieval",
    year: "1271年",
    title: "元朝建立",
    description:
      '忽必烈定国号为"大元"，建立元朝，是中国历史上第一个由少数民族建立的大一统王朝，疆域空前辽阔。',
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 9856,
    timelinePosition: "66.67%",
  },
  {
    id: "medieval-6",
    period: "medieval",
    year: "1368年",
    title: "明朝建立",
    description:
      "朱元璋推翻元朝统治，建立明朝，加强中央集权，郑和七下西洋，明朝中后期出现资本主义萌芽。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 10082,
    timelinePosition: "83.33%",
  },
  {
    id: "medieval-7",
    period: "medieval",
    year: "1644年",
    title: "清朝建立",
    description:
      '清军入关，建立清朝，是中国历史上最后一个封建王朝，前期出现"康乾盛世"，后期闭关锁国，逐渐落后于西方。',
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 11700,
    timelinePosition: "100%",
  },

  // 近代史
  {
    id: "modern-1",
    period: "modern",
    year: "1840年",
    title: "鸦片战争",
    description:
      "英国以林则徐虎门销烟为借口发动侵华战争，中国战败，被迫签订《南京条约》，中国开始沦为半殖民地半封建社会。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 12330,
    timelinePosition: "0%",
  },
  {
    id: "modern-2",
    period: "modern",
    year: "1911年",
    title: "辛亥革命",
    description:
      "武昌起义爆发，推翻清朝统治，结束中国两千多年的封建帝制，建立中华民国，是中国近代史上一次伟大的资产阶级民主革命。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 12615,
    timelinePosition: "25%",
  },
  {
    id: "modern-3",
    period: "modern",
    year: "1931年",
    title: "九一八事变",
    description:
      "日本关东军悍然发动九一八事变，侵占中国东北三省，开始了对中国的全面侵略，中国人民开始了长达14年的抗日战争。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 13285,
    timelinePosition: "50%",
  },
  {
    id: "modern-4",
    period: "modern",
    year: "1937年",
    title: "卢沟桥事变，抗日战争全面爆发",
    description:
      "七七事变后，中国进入全面抗战阶段，国共两党第二次合作，建立抗日民族统一战线，经过八年浴血奋战，最终取得胜利。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 13515,
    timelinePosition: "75%",
  },
  {
    id: "modern-5",
    period: "modern",
    year: "1949年",
    title: "中华人民共和国成立",
    description:
      "毛泽东在天安门城楼上宣告中华人民共和国成立，结束了帝国主义、封建主义和官僚资本主义的统治，中国人民从此站起来了。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 14540,
    timelinePosition: "100%",
  },

  // 现代史
  {
    id: "contemporary-1",
    period: "contemporary",
    year: "1949年",
    title: "中华人民共和国成立",
    description:
      "1949年10月1日，毛泽东在天安门城楼上宣告中华人民共和国成立，中国人民从此站起来了，开创了中国历史的新纪元。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 14540,
    timelinePosition: "0%",
  },
  {
    id: "contemporary-2",
    period: "contemporary",
    year: "1978年",
    title: "改革开放",
    description:
      "党的十一届三中全会召开，作出实行改革开放的历史性决策，中国开始从计划经济向市场经济转型，经济快速发展，国家面貌焕然一新。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 14540,
    timelinePosition: "50%",
  },
  {
    id: "contemporary-3",
    period: "contemporary",
    year: "21世纪",
    title: "全面建设社会主义现代化国家",
    description:
      "进入新时代，中国全面建成小康社会，开启全面建设社会主义现代化国家新征程，实现中华民族伟大复兴的中国梦。",
    videoUrl: "https://www.bilibili.com/video/BV1ErfRY6EFY",
    videoTime: 14540,
    timelinePosition: "100%",
  },
];

export const periodNames = {
  all: "全部历史时期",
  ancient: "古代史 (约公元前2070年-公元581年)",
  medieval: "中古史 (581年-1840年)",
  modern: "近代史 (1840年-1949年)",
  contemporary: "现代史 (1949年至今)",
};

export const periodColors = {
  all: "text-ink",
  ancient: "text-ancient",
  medieval: "text-medieval",
  modern: "text-modern",
  contemporary: "text-contemporary",
};
