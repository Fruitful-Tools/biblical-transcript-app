"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Home() {
  const [isMonasteryDiscoveryOpen, setIsMonasteryDiscoveryOpen] =
    useState(false);
  const [isTregellesJourneyOpen, setIsTregellesJourneyOpen] = useState(false);
  const [isVaticanProhibitionOpen, setIsVaticanProhibitionOpen] =
    useState(false);
  const [isManuscriptEvaluationOpen, setIsManuscriptEvaluationOpen] =
    useState(false);
  const [isWettsteinSystemOpen, setIsWettsteinSystemOpen] = useState(false);
  const [isTextusReceptusOpen, setIsTextusReceptusOpen] = useState(false);
  const [isErasmusRevolutionOpen, setIsErasmusRevolutionOpen] = useState(false);
  const [isPrintingFirstOpen, setIsPrintingFirstOpen] = useState(false);
  const [isWestcottHortOpen, setIsWestcottHortOpen] = useState(false);
  const [isNeutralTextOpen, setIsNeutralTextOpen] = useState(false);
  const [isShanghaiConferenceOpen, setIsShanghaiConferenceOpen] =
    useState(false);
  const [isUnionVersionOpen, setIsUnionVersionOpen] = useState(false);
  const [isManuscriptChoiceOpen, setIsManuscriptChoiceOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <header className="mb-12 space-y-4 border-b pb-8 text-center">
          <h1 className="text-foreground text-3xl font-bold">
            你⼿中聖經背後的故事：新約希臘⽂聖經的變遷
          </h1>
          <h2 className="text-muted-foreground text-lg font-medium">
            課程筆記 | 傳抄與翻譯 系列講座 | 台灣聖經公會
          </h2>
          <div className="text-muted-foreground space-y-1">
            <p className="text-lg">蟻安廷</p>
            <p className="text-sm">16/08/2025</p>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-foreground mb-3 text-lg font-semibold">
            從⼩處開始：《和合本》⼩字「有古卷⋯⋯」
          </h2>
          <div className="bg-muted/30 border-primary rounded border-l-4 p-4">
            <p className="text-center italic">
              例：太 1:25「有古卷：等她⽣了頭胎的兒⼦」
            </p>
          </div>
        </section>

        {/* Main Outline */}
        <main className="space-y-8">
          {/* Section 1 */}
          <section>
            <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold">
              <span className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                1
              </span>
              抄本獵人的「再發現」
            </h3>
            <ul className="text-muted-foreground ml-11 space-y-2">
              <li>昔中多夫的近東行</li>
              <li>
                <Collapsible
                  open={isMonasteryDiscoveryOpen}
                  onOpenChange={setIsMonasteryDiscoveryOpen}
                >
                  <CollapsibleTrigger className="hover:text-foreground flex cursor-pointer items-center gap-2 transition-colors">
                    {isMonasteryDiscoveryOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    西奈山聖凱薩琳修道院的「發現」：1844、1859年
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="space-y-4 rounded-lg border-l-4 border-stone-400 bg-stone-50 p-4 dark:bg-stone-900/50">
                      <div>
                        <h5 className="text-foreground mb-2 text-sm font-semibold">
                          📜 Tischendorf的發現故事
                        </h5>
                        <p className="text-foreground text-sm leading-relaxed">
                          Tischendorf
                          看到有修道士拿羊皮卷燒，在生火取暖。發現那居然是希臘文的舊約聖經。
                        </p>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
                          📖 西奈抄本詳細資訊
                        </h5>
                        <div className="space-y-2 rounded border bg-white p-3 dark:bg-stone-800">
                          <div>
                            <span className="text-sm font-medium">
                              ■ 四世紀大楷體手抄本
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              (Codex Sinaiticus; GA 01)
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium">
                              ■ 幾乎保存全本舊約（七十士譯本）及新約
                            </span>
                          </div>
                          <div>
                            <span className="text-sm font-medium">
                              ■ 現藏於
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              大英圖書館、萊比錫、聖彼得堡、聖凱薩琳修道院
                            </p>
                          </div>
                          <div className="text-muted-foreground pt-2 text-right text-xs italic">
                            © The British Library Board
                          </div>
                        </div>
                        <div className="mt-3 rounded border-l-4 border-blue-400 bg-blue-50 p-3 dark:bg-blue-950/30">
                          <div className="flex items-start gap-2">
                            <span className="text-sm text-blue-600 dark:text-blue-400">
                              💡
                            </span>
                            <div className="text-sm">
                              <span className="font-medium text-blue-800 dark:text-blue-300">
                                數位化筆記：
                              </span>
                              <p className="mt-1 leading-relaxed text-blue-700 dark:text-blue-200">
                                很幸運的現在所有的內容都數位化了，透過國際合作的
                                Codex Sinaiticus Project，
                                整個手稿已完全數位化並向全球開放。在這裡看得見：
                                <a
                                  href="https://www.codexsinaiticus.org/en/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-1 text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                >
                                  codexsinaiticus.org
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-amber-700 dark:text-amber-400">
                          🤔 學者的質疑
                        </h5>
                        <div className="space-y-2 text-sm leading-relaxed">
                          <p className="text-foreground">
                            後來研究學者懷疑這個故事的合理性，畢竟該修道院是一個很有傳統，重視抄本的地方。修道士們對手稿的保護非常重視，將珍貴手稿用於生火的情節似乎不太可能發生。
                          </p>
                          <p className="text-foreground">
                            事實是他把這些抄本帶回了德國，學者們也懷疑不知道當時是否有用一個合法的管道取得抄本。修道院官方認為西奈抄本是被盜取的，並在墻上掛有Tischendorf的借據。
                          </p>
                          <p className="text-foreground">
                            雖然後來發現1868年的贈予契約證明了合法性，但Tischendorf於1859年取走抄本時，修道院並沒有大主教，贈予的合法性仍存疑。還是真如故事所說？這個謎團至今仍有爭議。
                          </p>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li>十九世紀的研究大突破：古抄本的解析與尋覓</li>
              <li className="text-sm italic">
                Constantin von Tischendorf (1815-1874)
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold">
              <span className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                2
              </span>
              梵蒂岡圖書館的愛恨情仇
            </h3>
            <ul className="text-muted-foreground ml-11 space-y-2">
              <li>
                <Collapsible
                  open={isTregellesJourneyOpen}
                  onOpenChange={setIsTregellesJourneyOpen}
                >
                  <CollapsibleTrigger className="hover:text-foreground flex cursor-pointer items-center gap-2 transition-colors">
                    {isTregellesJourneyOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    崔家磊的羅馬行：1845 至 1846 年
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="space-y-4 rounded-lg border-l-4 border-stone-400 bg-stone-50 p-4 dark:bg-stone-900/50">
                      <div>
                        <h5 className="text-foreground mb-2 text-sm font-semibold">
                          🎯 Tregelles的學術使命
                        </h5>
                        <p className="text-foreground text-sm leading-relaxed">
                          Samuel Prideaux Tregelles (1813-1874)
                          是英國敬虔主義教徒，也是聖經學者，致力於建立更準確的希臘文新約聖經底本。
                          他深信必須回到最古老、最可靠的手稿來重建原始經文。當時西奈抄本雖已發現，但尚未公開，使得梵蒂岡抄本更顯珍貴。
                        </p>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
                          🏛️ 羅馬之旅的目標
                        </h5>
                        <div className="space-y-2 rounded border bg-white p-3 dark:bg-stone-800">
                          <div>
                            <span className="text-sm font-medium">
                              ■ 主要目標：研究梵蒂岡抄本
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              四世紀大楷體手稿，三列抄寫格式，與西奈抄本同樣珍貴
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium">
                              ■ 學術期望
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              希望能詳細校對這份古老手稿，為其關鍵經文研究提供基礎
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium">
                              ■ 時間安排
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              1845-1846年間多次造訪梵蒂岡圖書館
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li>
                <Collapsible
                  open={isVaticanProhibitionOpen}
                  onOpenChange={setIsVaticanProhibitionOpen}
                >
                  <CollapsibleTrigger className="hover:text-foreground flex cursor-pointer items-center gap-2 transition-colors">
                    {isVaticanProhibitionOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    梵蒂岡圖書館的禁令
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="space-y-4 rounded-lg border-l-4 border-red-400 bg-stone-50 p-4 dark:bg-stone-900/50">
                      <div>
                        <h5 className="mb-2 text-sm font-semibold text-red-700 dark:text-red-400">
                          🚫 嚴格的限制政策
                        </h5>
                        <p className="text-foreground text-sm leading-relaxed">
                          梵蒂岡圖書館對外來學者實施極為嚴格的限制，特別是對新教學者的研究活動格外謹慎。
                          當時的政策幾乎不允許詳細的抄本研究。
                        </p>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-amber-700 dark:text-amber-400">
                          😤 Tregelles的艱難經歷
                        </h5>
                        <div className="space-y-3 text-sm leading-relaxed">
                          <p className="text-foreground">
                            作為新教敬虔主義教徒，Tregelles
                            在天主教梵蒂岡圖書館遭遇層層攔阻：
                          </p>
                          <ul className="text-muted-foreground ml-4 space-y-1">
                            <li>• 每日僅允許短時間閱覽</li>
                            <li>• 嚴禁攜帶紙筆或任何記錄工具</li>
                            <li>• 館員全程監督，限制研究自由</li>
                            <li>• 多次申請延長研究時間遭拒絕</li>
                          </ul>
                          <div className="mt-3 rounded border-l-4 border-orange-400 bg-orange-50 p-3 dark:bg-orange-950/30">
                            <div className="flex items-start gap-2">
                              <span className="text-sm text-orange-600 dark:text-orange-400">
                                🤒
                              </span>
                              <div>
                                <p className="mb-1 text-xs font-medium text-orange-800 dark:text-orange-200">
                                  極限研究法
                                </p>
                                <p className="text-xs leading-relaxed text-orange-700 dark:text-orange-300">
                                  在胃病的陪同下，Tregelles
                                  使用了各樣手段，僅憑記憶觀察抄本內容，
                                  然後趕快回到旅館將發現的重要異文變體記錄下來。
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-purple-700 dark:text-purple-400">
                          💡 意外的收穫
                        </h5>
                        <div className="rounded border-l-4 border-purple-400 bg-purple-50 p-3 dark:bg-purple-950/30">
                          <p className="text-sm leading-relaxed text-purple-800 dark:text-purple-200">
                            儘管受到限制，Tregelles
                            仍然透過有限的觀察，確認了梵蒂岡抄本的重要性，
                            並為後來學者的研究奠定了基礎。他的經歷也促使後來圖書館政策的逐步開放。
                          </p>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li>
                <Collapsible
                  open={isManuscriptEvaluationOpen}
                  onOpenChange={setIsManuscriptEvaluationOpen}
                >
                  <CollapsibleTrigger className="hover:text-foreground flex cursor-pointer items-center gap-2 transition-colors">
                    {isManuscriptEvaluationOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    希臘文抄本評估標準：熟優熟劣？
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="space-y-4 rounded-lg border-l-4 border-green-400 bg-stone-50 p-4 dark:bg-stone-900/50">
                      <div>
                        <h5 className="mb-2 text-sm font-semibold text-green-700 dark:text-green-400">
                          📏 Tregelles的評估原則
                        </h5>
                        <p className="text-foreground text-sm leading-relaxed">
                          Tregelles
                          發展出系統性的手稿評估方法，強調年代越古老的手稿越接近原始經文。
                          他反對當時流行的「多數文本」理論，主張應該重視古老手稿的權威性。
                        </p>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
                          ⚖️ 評估標準對比
                        </h5>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="rounded border-l-4 border-green-500 bg-green-50 p-3 dark:bg-green-950/30">
                            <div className="mb-2 text-sm font-medium text-green-800 dark:text-green-300">
                              ✅ 優質手稿特徵
                            </div>
                            <ul className="space-y-1 text-xs text-green-700 dark:text-green-200">
                              <li>• 年代古老（4-6世紀）</li>
                              <li>• 地理分布廣泛</li>
                              <li>• 抄寫品質高</li>
                              <li>• 與其他古本一致</li>
                            </ul>
                          </div>
                          <div className="rounded border-l-4 border-red-500 bg-red-50 p-3 dark:bg-red-950/30">
                            <div className="mb-2 text-sm font-medium text-red-800 dark:text-red-300">
                              ❌ 較差手稿特徵
                            </div>
                            <ul className="space-y-1 text-xs text-red-700 dark:text-red-200">
                              <li>• 年代較晚（中世紀）</li>
                              <li>• 地區性偏見</li>
                              <li>• 抄寫錯誤多</li>
                              <li>• 明顯的編輯痕跡</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-purple-700 dark:text-purple-400">
                          🔍 梵蒂岡抄本 vs 西奈抄本
                        </h5>
                        <div className="space-y-2 rounded border bg-white p-3 dark:bg-stone-800">
                          <div className="text-sm leading-relaxed">
                            <p className="text-foreground mb-2">
                              Tregelles 通過對比研究發現：
                            </p>
                            <ul className="text-muted-foreground ml-4 space-y-1 text-xs">
                              <li>• 兩抄本都屬於「亞歷山大里亞文本型」</li>
                              <li>• 在關鍵經文上存在重要差異</li>
                              <li>• 需要更多古抄本來確定最佳讀法</li>
                              <li>• 奠定了後來「批判經文學」的基礎</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-amber-700 dark:text-amber-400">
                          🎯 學術影響與反思
                        </h5>
                        <div className="space-y-3">
                          <div className="rounded border-l-4 border-amber-400 bg-amber-50 p-3 dark:bg-amber-950/30">
                            <p className="text-sm leading-relaxed text-amber-800 dark:text-amber-200">
                              Tregelles 的評估方法深深影響了後來的聖經學者，包括
                              Westcott 和 Hort。
                              他的原則至今仍是現代經文批判學的重要基礎。
                            </p>
                          </div>
                          <div className="rounded border-l-4 border-gray-400 bg-gray-50 p-3 dark:bg-gray-950/30">
                            <div className="flex items-start gap-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                🤔
                              </span>
                              <div>
                                <p className="mb-1 text-xs font-medium text-gray-800 dark:text-gray-200">
                                  學術反思
                                </p>
                                <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300">
                                  然而，Tregelles
                                  的艱難經歷也讓我們反思：即使是最嚴謹的鑒別學比較，
                                  在面對研究條件的限制時，也不會完全無誤。學術研究的客觀性永遠存在挑戰。
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li className="text-sm italic">
                Samuel Prideaux Tregelles (1813-1874)
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold">
              <span className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                3
              </span>
              搜集狂的畢生努力
            </h3>
            <ul className="text-muted-foreground ml-11 space-y-2">
              <li>
                <Collapsible
                  open={isWettsteinSystemOpen}
                  onOpenChange={setIsWettsteinSystemOpen}
                >
                  <CollapsibleTrigger className="hover:text-foreground flex cursor-pointer items-center gap-2 transition-colors">
                    {isWettsteinSystemOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    韋特斯坦的學術革命：1693-1754年
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="space-y-4 rounded-lg border-l-4 border-stone-400 bg-stone-50 p-4 dark:bg-stone-900/50">
                      <div>
                        <h5 className="text-foreground mb-2 text-sm font-semibold">
                          👨‍🎓 Johann Jakob Wettstein (1693-1754)
                        </h5>
                        <p className="text-foreground text-sm leading-relaxed">
                          瑞士新約學者，生於巴塞爾的學術世家。
                          Wettstein以其龐大的希臘文抄本蒐集工作聞名，
                          被譽為「抄本搜集狂」。他的畢生努力為現代新約經文批判學奠定了堅實的基礎。
                        </p>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
                          📖 韋氏新約希臘文聖經 (1751-1752)
                        </h5>
                        <div className="space-y-2 rounded border bg-white p-3 dark:bg-stone-800">
                          <div>
                            <span className="text-sm font-medium">
                              ■ 出版資訊
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              Novum Testamentum Graecum (Amsterdam 1751-1752)
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium">
                              ■ 學術特色
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              首次建立系統性的抄本編目，為每個抄本分配獨特編號
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium">
                              ■ 重要性
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              創建了現代抄本研究的分類系統基礎
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-green-700 dark:text-green-400">
                          🗂️ 革命性的編目系統
                        </h5>
                        <div className="space-y-3">
                          <p className="text-foreground text-sm leading-relaxed">
                            Wettstein 建立了第一個系統性的希臘文抄本編目系統，
                            將抄本分為不同類別並給予統一編號。這個系統成為後來所有抄本研究的標準。
                          </p>
                          <div className="rounded border-l-4 border-green-400 bg-green-50 p-3 dark:bg-green-950/30">
                            <div className="text-sm">
                              <span className="font-medium text-green-800 dark:text-green-300">
                                分類與縮寫系統：
                              </span>
                              <ul className="mt-2 ml-4 space-y-1 text-xs text-green-700 dark:text-green-200">
                                <li>
                                  • 大楷體抄本：使用大寫拉丁字母 (A, B, C...)
                                </li>
                                <li>
                                  • 小楷體抄本：使用阿拉伯數字 (1, 2, 3...)
                                </li>
                                <li>• 經課集：使用小寫拉丁字母 (a, b, c...)</li>
                                <li>• 統一的引用格式與縮寫規則</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li>
                <Collapsible
                  open={isTextusReceptusOpen}
                  onOpenChange={setIsTextusReceptusOpen}
                >
                  <CollapsibleTrigger className="hover:text-foreground flex cursor-pointer items-center gap-2 transition-colors">
                    {isTextusReceptusOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    「公認經文」(Textus Receptus) 的發展
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="space-y-4 rounded-lg border-l-4 border-amber-400 bg-stone-50 p-4 dark:bg-stone-900/50">
                      <div>
                        <h5 className="text-foreground mb-2 text-sm font-semibold">
                          📜 「公認經文」的概念
                        </h5>
                        <p className="text-foreground text-sm leading-relaxed">
                          Textus Receptus（拉丁文，意為「受公認的經文」）
                          是指從16到19世紀廣泛被接受的希臘文新約經文版本。
                          這個傳統主要建基於較晚期的拜占庭手稿，
                          直到19世紀古抄本的發現才開始受到質疑。
                        </p>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-red-700 dark:text-red-400">
                          🏛️ Elzevir版本的歷史地位 (1633年)
                        </h5>
                        <div className="space-y-3">
                          <div className="rounded border bg-white p-3 dark:bg-stone-800">
                            <div>
                              <span className="text-sm font-medium">
                                ■ 出版資訊
                              </span>
                              <p className="text-muted-foreground ml-3 text-xs">
                                Novum Testamentum (Leiden 1633) - Elzevir兄弟版
                              </p>
                            </div>
                            <div className="mt-2">
                              <span className="text-sm font-medium">
                                ■ 著名的推廣口號
                              </span>
                              <div className="mt-2 ml-3 rounded border-l-4 border-red-400 bg-red-50 p-3 dark:bg-red-950/30">
                                <p className="text-xs leading-relaxed text-red-800 italic dark:text-red-200">
                                  「這部經文為今日所公認接受，其中無一處我們更動或算改。」
                                </p>
                                <p className="text-muted-foreground mt-1 text-xs">
                                  (Textum ergo habes, nunc ab omnibus
                                  receptum...)
                                </p>
                              </div>
                            </div>
                            <div className="mt-2">
                              <span className="text-sm font-medium">
                                ■ 「公認經文」的英定與影響
                              </span>
                              <p className="text-muted-foreground ml-3 text-xs">
                                此版本正式確立了「Textus Receptus」這個專有名詞
                              </p>
                            </div>
                          </div>

                          <div className="rounded border-l-4 border-orange-400 bg-orange-50 p-3 dark:bg-orange-950/30">
                            <div className="flex items-start gap-2">
                              <span className="text-sm text-orange-600 dark:text-orange-400">
                                ⚡
                              </span>
                              <div>
                                <p className="mb-1 text-xs font-medium text-orange-800 dark:text-orange-200">
                                  市場行銷的成功典範
                                </p>
                                <p className="text-xs leading-relaxed text-orange-700 dark:text-orange-300">
                                  Elzevir兄弟透過這句強而有力的行銷口號，
                                  成功地將他們的版本建立為「標準」經文，
                                  影響了之後三個世紀的聖經翻譯工作。
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-purple-700 dark:text-purple-400">
                          🔍 Wettstein的重要貢獻
                        </h5>
                        <div className="space-y-2 rounded border bg-white p-3 dark:bg-stone-800">
                          <div>
                            <span className="text-sm font-medium">
                              ■ 系統性比較
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              將Textus Receptus與古代抄本進行詳細對比
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium">
                              ■ 異文記錄
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              詳細記錄不同抄本間的文本差異
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium">
                              ■ 學術客觀性
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              提供證據而不強行推翻傳統，讓讀者自行判斷
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-amber-700 dark:text-amber-400">
                          🎯 歷史影響與遺產
                        </h5>
                        <div className="rounded border-l-4 border-amber-400 bg-amber-50 p-3 dark:bg-amber-950/30">
                          <p className="text-sm leading-relaxed text-amber-800 dark:text-amber-200">
                            Wettstein的工作為後來的經文批判學者（如Tischendorf、Tregelles等）
                            提供了重要的基礎資料。他的編目系統至今仍在使用，
                            成為現代新約經文研究不可或缺的工具。
                          </p>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li className="text-sm italic">
                Johann Jakob Wettstein (1693-1754)
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold">
              <span className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                4
              </span>
              公關行銷的最佳典範
            </h3>
            <ul className="text-muted-foreground ml-11 space-y-2">
              <li>
                <Collapsible
                  open={isErasmusRevolutionOpen}
                  onOpenChange={setIsErasmusRevolutionOpen}
                >
                  <CollapsibleTrigger className="hover:text-foreground flex cursor-pointer items-center gap-2 transition-colors">
                    {isErasmusRevolutionOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    伊拉斯姆的新約希臘文聖經：1516年的革命性突破
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="space-y-4 rounded-lg border-l-4 border-stone-400 bg-stone-50 p-4 dark:bg-stone-900/50">
                      <div>
                        <h5 className="text-foreground mb-2 text-sm font-semibold">
                          📚 Desiderius Erasmus (1466-1536)
                        </h5>
                        <p className="text-foreground text-sm leading-relaxed">
                          荷蘭人文主義學者伊拉斯姆，被譽為「歐洲的導師」。
                          他不僅是傑出的古典學者和神學家，更是極具商業頭腦的出版家。
                          1516年，他推出了歷史上第一部印刷版的新約希臘文聖經，
                          這不僅是學術成就，更是一場成功的市場革命。
                        </p>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
                          📖 Novum Instrumentum (1516年巴塞爾版)
                        </h5>
                        <div className="space-y-2 rounded border bg-white p-3 dark:bg-stone-800">
                          <div>
                            <span className="text-sm font-medium">
                              ■ 出版資訊
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              Novum Instrumentum omne, diligenter ab Erasmo
                              Roterodamo recognitum et emendatum (Basel: Froben,
                              1516)
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium">
                              ■ 學術特色
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              首部印刷版新約希臘文聖經，對頁附拉丁文翻譯
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium">
                              ■ 革命意義
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              打破天主教會對拉丁文武加大譯本的壟斷地位
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-green-700 dark:text-green-400">
                          🏛️ 依據小楷體抄本編纂
                        </h5>
                        <div className="space-y-3">
                          <p className="text-foreground text-sm leading-relaxed">
                            伊拉斯姆的版本主要依據12-15世紀的小楷體（minuscule）抄本，
                            而非更古老的大楷體抄本。雖然這在學術上並非最佳選擇，
                            但這些抄本相對容易取得，也符合當時的商業考量。
                          </p>
                          <div className="rounded border-l-4 border-blue-400 bg-blue-50 p-3 dark:bg-blue-950/30">
                            <div className="flex items-start gap-2">
                              <span className="text-sm text-blue-600 dark:text-blue-400">
                                ✍️
                              </span>
                              <div>
                                <p className="mb-1 text-xs font-medium text-blue-800 dark:text-blue-200">
                                  小楷體的技術革新
                                </p>
                                <p className="text-xs leading-relaxed text-blue-700 dark:text-blue-300">
                                  小楷體（minuscule）是9世紀發展的改良大楷體書寫系統，
                                  結合了大楷體的清晰度與草書的流暢性。
                                  這種書寫方式不僅節省羊皮紙空間，更重要的是書寫速度快、
                                  抄寫容易，大大降低了抄本製作成本，
                                  使得聖經手稿能夠更廣泛地流傳。
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="rounded border-l-4 border-green-400 bg-green-50 p-3 dark:bg-green-950/30">
                            <div className="text-sm">
                              <span className="font-medium text-green-800 dark:text-green-300">
                                主要依據抄本：
                              </span>
                              <ul className="mt-2 ml-4 space-y-2 text-xs text-green-700 dark:text-green-200">
                                <li>
                                  <div className="rounded border-l-2 border-green-600 bg-green-100 p-2 dark:bg-green-900/40">
                                    <div className="font-semibold text-green-800 dark:text-green-200">
                                      • GA 1 (小楷體抄本1號)
                                    </div>
                                    <div className="mt-1 text-green-700 dark:text-green-300">
                                      十世紀小楷體手抄本，篇幅涵蓋絕大部分的新約
                                    </div>
                                    <div className="mt-1 text-green-600 dark:text-green-400">
                                      現藏於巴塞爾大學圖書館 -
                                      伊拉斯姆可就近取得
                                    </div>
                                    <div className="mt-1 text-xs text-green-600 italic dark:text-green-400">
                                      採用改良大楷體，書寫容易，方便抄寫
                                    </div>
                                  </div>
                                </li>
                                <li>• GA 2 (12世紀小楷體抄本，缺啟示錄)</li>
                                <li>• GA 2814 (15世紀小楷體抄本，僅啟示錄)</li>
                                <li>
                                  • 數份巴塞爾當地可取得的拜占庭文本型抄本
                                </li>
                                <li>• 部分依據拉丁文武加大譯本回譯希臘文</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-3 rounded border-l-4 border-amber-400 bg-amber-50 p-3 dark:bg-amber-950/30">
                            <div className="flex items-start gap-2">
                              <span className="text-sm text-amber-600 dark:text-amber-400">
                                🎯
                              </span>
                              <div>
                                <p className="mb-1 text-xs font-medium text-amber-800 dark:text-amber-200">
                                  實用主義的明智選擇
                                </p>
                                <p className="text-xs leading-relaxed text-amber-700 dark:text-amber-300">
                                  伊拉斯姆選擇小楷體抄本並非偶然：它們不僅在巴塞爾容易取得，
                                  更重要的是這些抄本保存狀況較好、文字清晰易讀，
                                  適合快速的出版工作。相較於古老但殘缺不全的大楷體抄本，
                                  小楷體抄本提供了更完整的經文覆蓋，
                                  這對於追求「完整聖經」的商業目標而言是更理想的選擇。
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-red-700 dark:text-red-400">
                          ⚡ 公關行銷的天才策略
                        </h5>
                        <div className="space-y-3">
                          <div className="rounded border-l-4 border-red-400 bg-red-50 p-3 dark:bg-red-950/30">
                            <div className="flex items-start gap-2">
                              <span className="text-sm text-red-600 dark:text-red-400">
                                🎯
                              </span>
                              <div>
                                <p className="mb-1 text-xs font-medium text-red-800 dark:text-red-200">
                                  「第一本印刷版希臘文新約」的市場定位
                                </p>
                                <p className="text-xs leading-relaxed text-red-700 dark:text-red-300">
                                  伊拉斯姆巧妙地將自己的版本定位為「史上第一本印刷版希臘文新約聖經」，
                                  這個強而有力的行銷口號讓他在競爭激烈的出版市場中佔得先機，
                                  即使學術品質並非最佳，但市場成功無可置疑。
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="rounded border-l-4 border-orange-400 bg-orange-50 p-3 dark:bg-orange-950/30">
                            <div className="flex items-start gap-2">
                              <span className="text-sm text-orange-600 dark:text-orange-400">
                                📈
                              </span>
                              <div>
                                <p className="mb-1 text-xs font-medium text-orange-800 dark:text-orange-200">
                                  商業成功的關鍵因素
                                </p>
                                <ul className="space-y-1 text-xs leading-relaxed text-orange-700 dark:text-orange-300">
                                  <li>
                                    • 把握時機：活版印刷技術成熟的黃金時期
                                  </li>
                                  <li>
                                    •
                                    雙語版本：希臘文與拉丁文對照，兼顧學者與教會需求
                                  </li>
                                  <li>• 價格策略：相較手抄本更加經濟實惠</li>
                                  <li>• 品牌包裝：人文主義學者的權威背書</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li>
                <Collapsible
                  open={isPrintingFirstOpen}
                  onOpenChange={setIsPrintingFirstOpen}
                >
                  <CollapsibleTrigger className="hover:text-foreground flex cursor-pointer items-center gap-2 transition-colors">
                    {isPrintingFirstOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    活版印刷術的「第一本」：市場行銷的永恆典範
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="space-y-4 rounded-lg border-l-4 border-amber-400 bg-stone-50 p-4 dark:bg-stone-900/50">
                      <div>
                        <h5 className="text-foreground mb-2 text-sm font-semibold">
                          🖨️ 印刷革命與宗教改革
                        </h5>
                        <p className="text-foreground text-sm leading-relaxed">
                          1516年，正值古騰堡活版印刷術普及的關鍵時期。
                          伊拉斯姆敏銳地察覺到這個技術革命帶來的商機，
                          成為第一個成功將希臘文新約聖經商業化印刷的學者，
                          為後來的宗教改革提供了重要的學術工具。
                        </p>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-purple-700 dark:text-purple-400">
                          📊 「第一本」的行銷威力
                        </h5>
                        <div className="space-y-3">
                          <div className="rounded border bg-white p-3 dark:bg-stone-800">
                            <div className="text-sm leading-relaxed">
                              <p className="text-foreground mb-2">
                                伊拉斯姆的行銷策略堪稱典範：
                              </p>
                              <div className="grid gap-3 md:grid-cols-2">
                                <div className="rounded border-l-4 border-purple-500 bg-purple-50 p-3 dark:bg-purple-950/30">
                                  <div className="mb-2 text-sm font-medium text-purple-800 dark:text-purple-300">
                                    ✨ 創新定位
                                  </div>
                                  <ul className="space-y-1 text-xs text-purple-700 dark:text-purple-200">
                                    <li>• 「史上第一本」印刷版希臘文新約</li>
                                    <li>• 突破傳統手抄本限制</li>
                                    <li>• 民主化的知識傳播</li>
                                  </ul>
                                </div>
                                <div className="rounded border-l-4 border-blue-500 bg-blue-50 p-3 dark:bg-blue-950/30">
                                  <div className="mb-2 text-sm font-medium text-blue-800 dark:text-blue-300">
                                    🎯 市場優勢
                                  </div>
                                  <ul className="space-y-1 text-xs text-blue-700 dark:text-blue-200">
                                    <li>• 搶佔市場先機</li>
                                    <li>• 建立品牌權威</li>
                                    <li>• 創造話題熱度</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-green-700 dark:text-green-400">
                          🌍 深遠的歷史影響
                        </h5>
                        <div className="space-y-3">
                          <div className="rounded border-l-4 border-green-400 bg-green-50 p-3 dark:bg-green-950/30">
                            <div className="text-sm">
                              <span className="font-medium text-green-800 dark:text-green-300">
                                對後世的重大影響：
                              </span>
                              <ul className="mt-2 ml-4 space-y-1 text-xs text-green-700 dark:text-green-200">
                                <li>• 路德的德語聖經翻譯以此為底本</li>
                                <li>• 英王欽定本聖經的希臘文參考</li>
                                <li>• 奠定Textus Receptus的基礎</li>
                                <li>• 啟發後續學者的競爭與改進</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-3 rounded border-l-4 border-yellow-400 bg-yellow-50 p-3 dark:bg-yellow-950/30">
                            <div className="flex items-start gap-2">
                              <span className="text-sm text-yellow-600 dark:text-yellow-400">
                                🤔
                              </span>
                              <div>
                                <p className="mb-1 text-xs font-medium text-yellow-800 dark:text-yellow-200">
                                  學術vs商業的平衡
                                </p>
                                <p className="text-xs leading-relaxed text-yellow-700 dark:text-yellow-300">
                                  雖然伊拉斯姆的版本在學術上並非最完美（主要依據較晚的小楷體抄本），
                                  但其商業成功促進了聖經學術研究的普及化，
                                  這個案例至今仍是「如何在學術品質與商業成功間取得平衡」的經典教材。
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li className="text-sm italic">Desiderius Erasmus (1466-1536)</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold">
              <span className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                5
              </span>
              批判學術的豐碩成果
            </h3>
            <ul className="text-muted-foreground ml-11 space-y-2">
              <li>
                <Collapsible
                  open={isWestcottHortOpen}
                  onOpenChange={setIsWestcottHortOpen}
                >
                  <CollapsibleTrigger className="hover:text-foreground flex cursor-pointer items-center gap-2 transition-colors">
                    {isWestcottHortOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    威斯科特與霍特集大成之作：1881年劍橋版新約聖經
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="space-y-4 rounded-lg border-l-4 border-stone-400 bg-stone-50 p-4 dark:bg-stone-900/50">
                      <div>
                        <h5 className="text-foreground mb-2 text-sm font-semibold">
                          👨‍🎓 學術雙璧：Westcott & Hort
                        </h5>
                        <div className="grid gap-3 md:grid-cols-2">
                          <div className="rounded border bg-white p-3 dark:bg-stone-800">
                            <div className="mb-2 text-sm font-medium text-blue-700 dark:text-blue-400">
                              Brooke Foss Westcott (1825-1901)
                            </div>
                            <ul className="text-muted-foreground space-y-1 text-xs">
                              <li>• 劍橋大學神學教授</li>
                              <li>• 新約經文批判學先驅</li>
                              <li>• 後任達勒姆主教</li>
                            </ul>
                          </div>
                          <div className="rounded border bg-white p-3 dark:bg-stone-800">
                            <div className="mb-2 text-sm font-medium text-green-700 dark:text-green-400">
                              Fenton John Anthony Hort (1828-1892)
                            </div>
                            <ul className="text-muted-foreground space-y-1 text-xs">
                              <li>• 劍橋大學希臘語教授</li>
                              <li>• 經文批判理論大師</li>
                              <li>• 系譜學方法創建者</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
                          📚 The New Testament in the Original Greek (1881)
                        </h5>
                        <div className="space-y-2 rounded border bg-white p-3 dark:bg-stone-800">
                          <div>
                            <span className="text-sm font-medium">
                              ■ 出版資訊
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              Cambridge: Macmillan and Co., 1881 (2 volumes)
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium">
                              ■ 學術特色
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              首次系統性運用科學方法建構希臘文新約經文
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium">
                              ■ 革命意義
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              徹底挑戰並推翻了傳統Textus Receptus的權威地位
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-purple-700 dark:text-purple-400">
                          🔬 科學化的經文批判方法
                        </h5>
                        <div className="space-y-3">
                          <div className="rounded border-l-4 border-purple-400 bg-purple-50 p-3 dark:bg-purple-950/30">
                            <div className="text-sm">
                              <span className="font-medium text-purple-800 dark:text-purple-300">
                                創新的研究方法：
                              </span>
                              <ul className="mt-2 ml-4 space-y-1 text-xs text-purple-700 dark:text-purple-200">
                                <li>• 系譜學分析：追溯手稿傳承關係</li>
                                <li>• 內證與外證並重：內容與歷史證據結合</li>
                                <li>• 地理分布考量：不同地區文本傳統比較</li>
                                <li>• 統計學原則：量化分析異文出現頻率</li>
                              </ul>
                            </div>
                          </div>
                          <div className="rounded border-l-4 border-amber-400 bg-amber-50 p-3 dark:bg-amber-950/30">
                            <div className="flex items-start gap-2">
                              <span className="text-sm text-amber-600 dark:text-amber-400">
                                ⚖️
                              </span>
                              <div>
                                <p className="mb-1 text-xs font-medium text-amber-800 dark:text-amber-200">
                                  經文評估原則
                                </p>
                                <p className="text-xs leading-relaxed text-amber-700 dark:text-amber-300">
                                  「較難讀法優先」（lectio difficilior
                                  potior）： 抄寫員傾向於簡化或修正困難的讀法，
                                  因此較困難或不尋常的讀法通常更接近原文。
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li>
                <Collapsible
                  open={isNeutralTextOpen}
                  onOpenChange={setIsNeutralTextOpen}
                >
                  <CollapsibleTrigger className="hover:text-foreground flex cursor-pointer items-center gap-2 transition-colors">
                    {isNeutralTextOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    公元四世紀的經文型態：「中性經文」理論與《英國修訂譯本》
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="space-y-4 rounded-lg border-l-4 border-green-400 bg-stone-50 p-4 dark:bg-stone-900/50">
                      <div>
                        <h5 className="text-foreground mb-2 text-sm font-semibold">
                          🎯 「中性經文」(Neutral Text) 理論
                        </h5>
                        <p className="text-foreground text-sm leading-relaxed">
                          Westcott與Hort提出了劃時代的「中性經文」理論，
                          認為存在一個相對純淨、未受後期編輯影響的經文型態，
                          主要保存在4世紀的亞歷山大里亞文本傳統中。
                          這個理論徹底改變了學者對新約經文歷史的理解。
                        </p>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
                          📊 四大文本型態分類
                        </h5>
                        <div className="grid gap-3 md:grid-cols-2">
                          <div className="space-y-2">
                            <div className="rounded border-l-4 border-green-500 bg-green-50 p-3 dark:bg-green-950/30">
                              <div className="mb-1 text-sm font-medium text-green-800 dark:text-green-300">
                                🥇 中性經文 (Neutral)
                              </div>
                              <ul className="space-y-1 text-xs text-green-700 dark:text-green-200">
                                <li>• 代表：西奈抄本(ℵ)、梵蒂岡抄本(B)</li>
                                <li>• 特色：最接近原始經文</li>
                                <li>• 地區：亞歷山大里亞</li>
                              </ul>
                            </div>
                            <div className="rounded border-l-4 border-blue-500 bg-blue-50 p-3 dark:bg-blue-950/30">
                              <div className="mb-1 text-sm font-medium text-blue-800 dark:text-blue-300">
                                📚 亞歷山大文本 (Alexandrian)
                              </div>
                              <ul className="space-y-1 text-xs text-blue-700 dark:text-blue-200">
                                <li>• 代表：亞歷山大抄本(A)</li>
                                <li>• 特色：學者修訂痕跡</li>
                                <li>• 品質：次於中性經文</li>
                              </ul>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="rounded border-l-4 border-orange-500 bg-orange-50 p-3 dark:bg-orange-950/30">
                              <div className="mb-1 text-sm font-medium text-orange-800 dark:text-orange-300">
                                🏛️ 西方文本 (Western)
                              </div>
                              <ul className="space-y-1 text-xs text-orange-700 dark:text-orange-200">
                                <li>• 代表：貝札抄本(D)</li>
                                <li>• 特色：意譯與擴充較多</li>
                                <li>• 地區：羅馬、高盧</li>
                              </ul>
                            </div>
                            <div className="rounded border-l-4 border-red-500 bg-red-50 p-3 dark:bg-red-950/30">
                              <div className="mb-1 text-sm font-medium text-red-800 dark:text-red-300">
                                🏰 敘利亞文本 (Syrian)
                              </div>
                              <ul className="space-y-1 text-xs text-red-700 dark:text-red-200">
                                <li>• 代表：Textus Receptus基礎</li>
                                <li>• 特色：後期編輯整合</li>
                                <li>• 評價：最遠離原文</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-purple-700 dark:text-purple-400">
                          📖 對《英國修訂譯本》的影響
                        </h5>
                        <div className="space-y-3">
                          <div className="rounded border bg-white p-3 dark:bg-stone-800">
                            <div>
                              <span className="text-sm font-medium">
                                ■ Revised Version (1881-1885)
                              </span>
                              <p className="text-muted-foreground ml-3 text-xs">
                                英國教會委託修訂的新版聖經，以Westcott-Hort經文為基礎
                              </p>
                            </div>
                            <div className="mt-2">
                              <span className="text-sm font-medium">
                                ■ 重大改變
                              </span>
                              <p className="text-muted-foreground ml-3 text-xs">
                                放棄傳統Textus Receptus，採納古代手稿證據
                              </p>
                            </div>
                            <div className="mt-2">
                              <span className="text-sm font-medium">
                                ■ 深遠影響
                              </span>
                              <p className="text-muted-foreground ml-3 text-xs">
                                成為後續現代聖經譯本的學術標準
                              </p>
                            </div>
                          </div>
                          <div className="rounded border-l-4 border-gray-400 bg-gray-50 p-3 dark:bg-gray-950/30">
                            <div className="flex items-start gap-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                🤔
                              </span>
                              <div>
                                <p className="mb-1 text-xs font-medium text-gray-800 dark:text-gray-200">
                                  學術爭議與反思
                                </p>
                                <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300">
                                  Westcott-Hort的理論在當時引起巨大爭議，
                                  特別是對傳統經文的挑戰。雖然現代學者對其「中性經文」概念有所修正，
                                  但其科學化的研究方法和對古代手稿的重視，
                                  仍是現代經文批判學的重要基礎。
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li className="text-sm italic">
                Brooke Foss Westcott (1825-1901) & Fenton John Anthony Hort
                (1828-1892)
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold">
              <span className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                6
              </span>
              傳統與現代的融合
            </h3>
            <ul className="text-muted-foreground ml-11 space-y-2">
              <li>
                <Collapsible
                  open={isShanghaiConferenceOpen}
                  onOpenChange={setIsShanghaiConferenceOpen}
                >
                  <CollapsibleTrigger className="hover:text-foreground flex cursor-pointer items-center gap-2 transition-colors">
                    {isShanghaiConferenceOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    1890年上海在華傳教士大會：中文聖經翻譯的轉捩點
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="space-y-4 rounded-lg border-l-4 border-stone-400 bg-stone-50 p-4 dark:bg-stone-900/50">
                      <div>
                        <h5 className="text-foreground mb-2 text-sm font-semibold">
                          🏛️ 歷史背景：中國基督教傳教工作的里程碑
                        </h5>
                        <p className="text-foreground text-sm leading-relaxed">
                          1890年5月10-24日，來自各差會的傳教士在上海召開了具有歷史意義的「在華傳教士大會」
                          (General Conference of the Protestant Missionaries of
                          China)。
                          這次大會面對的核心問題是：如何為中國教會提供一部統一、準確、
                          且符合中文表達習慣的聖經譯本。
                        </p>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
                          📊 大會面臨的翻譯困境
                        </h5>
                        <div className="space-y-2 rounded border bg-white p-3 dark:bg-stone-800">
                          <div>
                            <span className="text-sm font-medium">
                              ■ 譯本分歧問題
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              當時已有馬禮遜《神天聖書》(1823)、麥都思《新遺詔書》等多個中文譯本，
                              但在神學詞彙、翻譯風格上存在重大分歧
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium">
                              ■ 「譯名之爭」
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              最著名的是「上帝」vs「神」之爭，反映出不同宗派對神學概念的理解差異
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium">
                              ■ 底本選擇的挑戰
                            </span>
                            <p className="text-muted-foreground ml-3 text-xs">
                              面對Textus
                              Receptus與新發現古抄本的證據，如何選擇最適當的希臘文底本？
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-green-700 dark:text-green-400">
                          🎯 大會的重要決議
                        </h5>
                        <div className="space-y-3">
                          <div className="rounded border-l-4 border-green-400 bg-green-50 p-3 dark:bg-green-950/30">
                            <div className="text-sm">
                              <span className="font-medium text-green-800 dark:text-green-300">
                                統一翻譯計劃：
                              </span>
                              <ul className="mt-2 ml-4 space-y-1 text-xs text-green-700 dark:text-green-200">
                                <li>• 組織聯合翻譯委員會，整合各差會資源</li>
                                <li>• 制定統一的翻譯原則與神學詞彙標準</li>
                                <li>• 採用「和合」方式，調和不同宗派觀點</li>
                                <li>• 分為深文理、淺文理、官話三個版本</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li>
                <Collapsible
                  open={isUnionVersionOpen}
                  onOpenChange={setIsUnionVersionOpen}
                >
                  <CollapsibleTrigger className="hover:text-foreground flex cursor-pointer items-center gap-2 transition-colors">
                    {isUnionVersionOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    中文和合本的誕生：1919年的里程碑
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="space-y-4 rounded-lg border-l-4 border-blue-400 bg-stone-50 p-4 dark:bg-stone-900/50">
                      <div>
                        <h5 className="text-foreground mb-2 text-sm font-semibold">
                          📚 翻譯委員會的組成與工作
                        </h5>
                        <p className="text-foreground text-sm leading-relaxed">
                          經過近三十年的努力，1919年中文《和合本》聖經正式出版。
                          這部影響深遠的譯本是中外學者通力合作的結晶，
                          其翻譯過程展現了當時對希臘文底本選擇的深思熟慮。
                        </p>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-purple-700 dark:text-purple-400">
                          👥 翻譯團隊的國際合作
                        </h5>
                        <div className="grid gap-3 md:grid-cols-2">
                          <div className="rounded border bg-white p-3 dark:bg-stone-800">
                            <div className="mb-2 text-sm font-medium text-blue-700 dark:text-blue-400">
                              西方學者代表
                            </div>
                            <ul className="text-muted-foreground space-y-1 text-xs">
                              <li>• 富善 (Chauncey Goodrich) - 美國公理會</li>
                              <li>
                                • 鮑康寧 (Frederick W. Baller) - 英國浸信會
                              </li>
                              <li>• 白漢理 (Henry Blodget) - 美國公理會</li>
                            </ul>
                          </div>
                          <div className="rounded border bg-white p-3 dark:bg-stone-800">
                            <div className="mb-2 text-sm font-medium text-green-700 dark:text-green-400">
                              中國學者代表
                            </div>
                            <ul className="text-muted-foreground space-y-1 text-xs">
                              <li>• 劉廷芳 - 燕京大學教授</li>
                              <li>• 徐謙 - 中華基督教青年會</li>
                              <li>• 誠靜怡 - 華人教會領袖</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-amber-700 dark:text-amber-400">
                          📖 底本選擇的演進歷程
                        </h5>
                        <div className="space-y-3">
                          <div className="rounded border bg-white p-3 dark:bg-stone-800">
                            <div>
                              <span className="text-sm font-medium">
                                ■ 初期依據 (1890-1900)
                              </span>
                              <p className="text-muted-foreground ml-3 text-xs">
                                以Scrivener版Textus
                                Receptus為主要底本，參考Tischendorf第八版
                              </p>
                            </div>
                            <div className="mt-2">
                              <span className="text-sm font-medium">
                                ■ 中期調整 (1900-1910)
                              </span>
                              <p className="text-muted-foreground ml-3 text-xs">
                                加入Westcott-Hort經文的重要發現，在關鍵經文處進行比較
                              </p>
                            </div>
                            <div className="mt-2">
                              <span className="text-sm font-medium">
                                ■ 最終版本 (1910-1919)
                              </span>
                              <p className="text-muted-foreground ml-3 text-xs">
                                採用折衷方案，在Textus
                                Receptus基礎上，採納古抄本的重要證據
                              </p>
                            </div>
                          </div>
                          <div className="rounded border-l-4 border-orange-400 bg-orange-50 p-3 dark:bg-orange-950/30">
                            <div className="flex items-start gap-2">
                              <span className="text-sm text-orange-600 dark:text-orange-400">
                                🔍
                              </span>
                              <div>
                                <p className="mb-1 text-xs font-medium text-orange-800 dark:text-orange-200">
                                  實例：太1:25的處理
                                </p>
                                <p className="text-xs leading-relaxed text-orange-700 dark:text-orange-300">
                                  和合本在太1:25採用「等她生了兒子」，並在小註標明「有古卷：等她生了頭胎的兒子」。
                                  這展現了翻譯委員會對古抄本證據的重視，
                                  同時保持對傳統經文的尊重。
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li>
                <Collapsible
                  open={isManuscriptChoiceOpen}
                  onOpenChange={setIsManuscriptChoiceOpen}
                >
                  <CollapsibleTrigger className="hover:text-foreground flex cursor-pointer items-center gap-2 transition-colors">
                    {isManuscriptChoiceOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    希臘文底本的抉擇與取捨：學術與實用的平衡
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="space-y-4 rounded-lg border-l-4 border-green-400 bg-stone-50 p-4 dark:bg-stone-900/50">
                      <div>
                        <h5 className="text-foreground mb-2 text-sm font-semibold">
                          ⚖️ 翻譯中的底本選擇困境
                        </h5>
                        <p className="text-foreground text-sm leading-relaxed">
                          中文聖經翻譯面臨的核心問題是：如何在學術準確性與實用性之間取得平衡？
                          19-20世紀正值經文批判學興起，新的手稿證據不斷湧現，
                          翻譯者必須在不同的希臘文底本間做出明智的選擇。
                        </p>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-red-700 dark:text-red-400">
                          🎯 底本選擇的考量因素
                        </h5>
                        <div className="grid gap-3 md:grid-cols-2">
                          <div className="space-y-2">
                            <div className="rounded border-l-4 border-blue-500 bg-blue-50 p-3 dark:bg-blue-950/30">
                              <div className="mb-1 text-sm font-medium text-blue-800 dark:text-blue-300">
                                📚 學術因素
                              </div>
                              <ul className="space-y-1 text-xs text-blue-700 dark:text-blue-200">
                                <li>• 手稿年代的古老程度</li>
                                <li>• 地理分布的廣泛性</li>
                                <li>• 內證與外證的一致性</li>
                                <li>• 經文批判學的最新成果</li>
                              </ul>
                            </div>
                            <div className="rounded border-l-4 border-orange-500 bg-orange-50 p-3 dark:bg-orange-950/30">
                              <div className="mb-1 text-sm font-medium text-orange-800 dark:text-orange-300">
                                🌍 文化因素
                              </div>
                              <ul className="space-y-1 text-xs text-orange-700 dark:text-orange-200">
                                <li>• 中文表達習慣</li>
                                <li>• 中國文化背景理解</li>
                                <li>• 佛道教詞彙的避免</li>
                                <li>• 儒家思想的融合</li>
                              </ul>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="rounded border-l-4 border-green-500 bg-green-50 p-3 dark:bg-green-950/30">
                              <div className="mb-1 text-sm font-medium text-green-800 dark:text-green-300">
                                ⛪ 教會因素
                              </div>
                              <ul className="space-y-1 text-xs text-green-700 dark:text-green-200">
                                <li>• 不同宗派的神學觀點</li>
                                <li>• 傳統經文的接受度</li>
                                <li>• 牧會實用性的考量</li>
                                <li>• 會眾理解的容易程度</li>
                              </ul>
                            </div>
                            <div className="rounded border-l-4 border-purple-500 bg-purple-50 p-3 dark:bg-purple-950/30">
                              <div className="mb-1 text-sm font-medium text-purple-800 dark:text-purple-300">
                                🕐 時代因素
                              </div>
                              <ul className="space-y-1 text-xs text-purple-700 dark:text-purple-200">
                                <li>• 19世紀末的學術水準</li>
                                <li>• 可獲得的研究資源</li>
                                <li>• 國際學術交流狀況</li>
                                <li>• 印刷技術的限制</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="mb-2 text-sm font-semibold text-amber-700 dark:text-amber-400">
                          🔍 和合本的選擇策略
                        </h5>
                        <div className="space-y-3">
                          <div className="rounded border-l-4 border-amber-400 bg-amber-50 p-3 dark:bg-amber-950/30">
                            <div className="text-sm">
                              <span className="font-medium text-amber-800 dark:text-amber-300">
                                三重標準的智慧：
                              </span>
                              <div className="mt-2 space-y-2 text-xs text-amber-700 dark:text-amber-200">
                                <div className="rounded border-l-2 border-amber-600 bg-amber-100 p-2 dark:bg-amber-900/40">
                                  <div className="font-semibold text-amber-800 dark:text-amber-200">
                                    1. 保守穩健原則
                                  </div>
                                  <div className="mt-1 text-amber-700 dark:text-amber-300">
                                    優先採用傳統Textus
                                    Receptus，確保與西方教會的一致性
                                  </div>
                                </div>
                                <div className="rounded border-l-2 border-amber-600 bg-amber-100 p-2 dark:bg-amber-900/40">
                                  <div className="font-semibold text-amber-800 dark:text-amber-200">
                                    2. 學術開放原則
                                  </div>
                                  <div className="mt-1 text-amber-700 dark:text-amber-300">
                                    重要異文處參考古抄本證據，在小字註中提供替代讀法
                                  </div>
                                </div>
                                <div className="rounded border-l-2 border-amber-600 bg-amber-100 p-2 dark:bg-amber-900/40">
                                  <div className="font-semibold text-amber-800 dark:text-amber-200">
                                    3. 中國化原則
                                  </div>
                                  <div className="mt-1 text-amber-700 dark:text-amber-300">
                                    在不違背原文的前提下，採用最適合中文表達的譯法
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li className="text-sm italic">
                中文和合本翻譯委員會 (1890-1919)
              </li>
            </ul>
          </section>
        </main>

        {/* Conclusion */}
        <section className="mt-12 border-t pt-8">
          <h3 className="mb-4 text-xl font-semibold">
            反思與結語：得來不易的聖經
          </h3>
          <div className="bg-muted/30 border-primary rounded border-l-4 p-6">
            <p className="text-center leading-relaxed italic">
              西
              4:16：你們念了這書信，便交給⽼底嘉的教會，叫他們也念；你們也要念從⽼底嘉來的書信。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
