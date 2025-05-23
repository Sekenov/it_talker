import AnimatedSection from '@/components/AnimatedSection';

const rules = [
  {
    id: 1,
    title: 'Доступен для новичков, полезно для опытных',
    description: 'Мы разделяем уже опытных IT-специалистов от тех, кто только начал свой путь в IT. Перед зачислением ученика мы оцениваем его уровень знаний и зачисляем его в соответствующую группу',
    hasLink: true,
    colSpan: 'col-span-1 md:col-span-2'
  },
  {
    id: 2,
    title: 'Уют',
    description: 'В группе не может быть больше 20 человек. Лектор запоминает каждого ученика лично, а учебный процесс становится более уютным.',
    colSpan: 'col-span-1'
  },
  {
    id: 3,
    title: 'От начала до конца',
    description: 'Лектор ведет группу от начала и до конца обучения, что позволяет ему лучше чувствовать успеваемость ученика.',
    colSpan: 'col-span-1'
  },
  {
    id: 4,
    title: 'На вопрос - отвечаем',
    description: 'Лектор обязан развернуто ответить в течение 24 часов на любой вопрос, заданный учеником в чате группы и касающийся обучения.',
    colSpan: 'col-span-1'
  },
  {
    id: 5,
    title: 'Помогаем. Всегда.',
    description: 'Если ученик просит лектора помочь с установкой ПО, которое требуется в рамках обучения, лектор обязан ему помочь (не во время real-time воркшопа).',
    colSpan: 'col-span-1'
  }
];

interface RulesProps {
  openModal: () => void;
}

const Rules = ({ openModal }: RulesProps) => {
  return (
    <section className="relative overflow-hidden bg-[#6587C1] text-white pt-16 px-2 md:px-0 rounded-xl">
      {/* Decorative blobs */}
      <div className="absolute w-[667px] h-[505px] bg-[#04326F] opacity-45 rounded-full blur-[120px] z-0" style={{ top: '323px', left: '-230px' }} />
      <div className="absolute w-[299px] h-[467px] bg-[#004DFF] opacity-45 rounded-full blur-[120px] z-0" style={{ top: '204px', left: '1587px' }} />
      <div className="absolute w-[652px] h-[299px] bg-[#ECF4FF] opacity-45 rounded-full blur-[120px] z-0" style={{ top: '68px', left: '978px' }} />
      <div className="absolute w-[1014px] h-[299px] bg-[#ECF4FF] opacity-45 rounded-full blur-[120px] z-0" style={{ top: '887px', left: '195px' }} />

      <div className="relative z-10">
        <div className="container mx-auto">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              5 правил it.t Academy
            </h2>
            <p className="text-lg md:text-xl mb-3 text-white">
              Чтобы ваше обучение действительно принесло вам пользу:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rules.map((rule) => (
                <div key={rule.id} className={rule.colSpan}>
                  <div className="bg-white rounded-[25px] p-6 md:p-8 h-full mt-6">
                    <h3 className="text-[var(--text-primary)] text-xl md:text-2xl font-semibold mb-6">
                      {rule.title}
                    </h3>
                    <p className="text-[#565656] mb-6 font-medium text-sm">
                      {rule.description}
                    </p>
                    {rule.hasLink && (
                      <button
                        onClick={openModal}
                        className="text-[var(--button-primary)] font-medium hover:opacity-80 transition-opacity inline-flex items-center"
                      >
                        Узнать свой уровень
                        <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center w-full">
              <div className="bg-[#18529D] md:bg-[#285EA4] md:bg-opacity-50 backdrop-blur-sm rounded-t-2xl px-6 md:py-3 py-1 mx-auto">
                <p className="text-m text-white text-center">
                  *актуально для тарифов &ldquo;С обратной связью&rdquo; и &ldquo;Премиум&rdquo;
                </p>
              </div>
          </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Rules;
