"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function Home() {
  const [isMonasteryDiscoveryOpen, setIsMonasteryDiscoveryOpen] = useState(false);
  const [isTregellesJourneyOpen, setIsTregellesJourneyOpen] = useState(false);
  const [isVaticanProhibitionOpen, setIsVaticanProhibitionOpen] = useState(false);
  const [isManuscriptEvaluationOpen, setIsManuscriptEvaluationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center space-y-4 mb-12 border-b pb-8">
          <h1 className="text-3xl font-bold text-foreground">
            你⼿中聖經背後的故事：新約希臘⽂聖經的變遷
          </h1>
          <h2 className="text-lg text-muted-foreground font-medium">
            課程筆記 | 傳抄與翻譯 系列講座 | 台灣聖經公會
          </h2>
          <div className="text-muted-foreground space-y-1">
            <p className="text-lg">蟻安廷</p>
            <p className="text-sm">16/08/2025</p>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3 text-foreground">
            從⼩處開始：《和合本》⼩字「有古卷⋯⋯」
          </h2>
          <div className="bg-muted/30 p-4 rounded border-l-4 border-primary">
            <p className="italic text-center">
              例：太 1:25「有古卷：等她⽣了頭胎的兒⼦」
            </p>
          </div>
        </section>

        {/* Main Outline */}
        <main className="space-y-8">
          {/* Section 1 */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              抄本獵人的「再發現」
            </h3>
            <ul className="ml-11 space-y-2 text-muted-foreground">
              <li>昔中多夫的近東行</li>
              <li>
                <Collapsible open={isMonasteryDiscoveryOpen} onOpenChange={setIsMonasteryDiscoveryOpen}>
                  <CollapsibleTrigger className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer">
                    {isMonasteryDiscoveryOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    西奈山聖凱薩琳修道院的「發現」：1844、1859年
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="bg-stone-50 dark:bg-stone-900/50 p-4 rounded-lg border-l-4 border-stone-400 space-y-4">
                      <div>
                        <h5 className="font-semibold text-sm text-foreground mb-2">📜 Tischendorf的發現故事</h5>
                        <p className="text-sm leading-relaxed text-foreground">
                          Tischendorf 看到有修道士拿羊皮卷燒，在生火取暖。發現那居然是希臘文的舊約聖經。
                        </p>
                      </div>
                      
                      <div className="border-t pt-3">
                        <h5 className="font-semibold text-sm text-blue-700 dark:text-blue-400 mb-2">📖 西奈抄本詳細資訊</h5>
                        <div className="bg-white dark:bg-stone-800 p-3 rounded border space-y-2">
                          <div>
                            <span className="font-medium text-sm">■ 四世紀大楷體手抄本</span>
                            <p className="text-xs text-muted-foreground ml-3">(Codex Sinaiticus; GA 01)</p>
                          </div>
                          <div>
                            <span className="font-medium text-sm">■ 幾乎保存全本舊約（七十士譯本）及新約</span>
                          </div>
                          <div>
                            <span className="font-medium text-sm">■ 現藏於</span>
                            <p className="text-xs text-muted-foreground ml-3">
                              大英圖書館、萊比錫、聖彼得堡、聖凱薩琳修道院
                            </p>
                          </div>
                          <div className="text-xs text-muted-foreground italic text-right pt-2">
                            © The British Library Board
                          </div>
                        </div>
                        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded border-l-4 border-blue-400">
                          <div className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 text-sm">💡</span>
                            <div className="text-sm">
                              <span className="font-medium text-blue-800 dark:text-blue-300">數位化筆記：</span>
                              <p className="text-blue-700 dark:text-blue-200 mt-1 leading-relaxed">
                                很幸運的現在所有的內容都數位化了，透過國際合作的 Codex Sinaiticus Project，
                                整個手稿已完全數位化並向全球開放。在這裡看得見：
                                <a 
                                  href="https://www.codexsinaiticus.org/en/" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 ml-1"
                                >
                                  codexsinaiticus.org
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-3">
                        <h5 className="font-semibold text-sm text-amber-700 dark:text-amber-400 mb-2">🤔 學者的質疑</h5>
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
              <li className="text-sm italic">Constantin von Tischendorf (1815-1874)</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              梵蒂岡圖書館的愛恨情仇
            </h3>
            <ul className="ml-11 space-y-2 text-muted-foreground">
              <li>
                <Collapsible open={isTregellesJourneyOpen} onOpenChange={setIsTregellesJourneyOpen}>
                  <CollapsibleTrigger className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer">
                    {isTregellesJourneyOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    崔家磊的羅馬行：1845 至 1846 年
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="bg-stone-50 dark:bg-stone-900/50 p-4 rounded-lg border-l-4 border-stone-400 space-y-4">
                      <div>
                        <h5 className="font-semibold text-sm text-foreground mb-2">🎯 Tregelles的學術使命</h5>
                        <p className="text-sm leading-relaxed text-foreground">
                          Samuel Prideaux Tregelles (1813-1874) 是英國敬虔主義教徒，也是聖經學者，致力於建立更準確的希臘文新約聖經底本。
                          他深信必須回到最古老、最可靠的手稿來重建原始經文。當時西奈抄本雖已發現，但尚未公開，使得梵蒂岡抄本更顯珍貴。
                        </p>
                      </div>
                      
                      <div className="border-t pt-3">
                        <h5 className="font-semibold text-sm text-blue-700 dark:text-blue-400 mb-2">🏛️ 羅馬之旅的目標</h5>
                        <div className="bg-white dark:bg-stone-800 p-3 rounded border space-y-2">
                          <div>
                            <span className="font-medium text-sm">■ 主要目標：研究梵蒂岡抄本</span>
                            <p className="text-xs text-muted-foreground ml-3">四世紀大楷體手稿，三列抄寫格式，與西奈抄本同樣珍貴</p>
                          </div>
                          <div>
                            <span className="font-medium text-sm">■ 學術期望</span>
                            <p className="text-xs text-muted-foreground ml-3">希望能詳細校對這份古老手稿，為其關鍵經文研究提供基礎</p>
                          </div>
                          <div>
                            <span className="font-medium text-sm">■ 時間安排</span>
                            <p className="text-xs text-muted-foreground ml-3">1845-1846年間多次造訪梵蒂岡圖書館</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li>
                <Collapsible open={isVaticanProhibitionOpen} onOpenChange={setIsVaticanProhibitionOpen}>
                  <CollapsibleTrigger className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer">
                    {isVaticanProhibitionOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    梵蒂岡圖書館的禁令
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="bg-stone-50 dark:bg-stone-900/50 p-4 rounded-lg border-l-4 border-red-400 space-y-4">
                      <div>
                        <h5 className="font-semibold text-sm text-red-700 dark:text-red-400 mb-2">🚫 嚴格的限制政策</h5>
                        <p className="text-sm leading-relaxed text-foreground">
                          梵蒂岡圖書館對外來學者實施極為嚴格的限制，特別是對新教學者的研究活動格外謹慎。
                          當時的政策幾乎不允許詳細的抄本研究。
                        </p>
                      </div>
                      
                      <div className="border-t pt-3">
                        <h5 className="font-semibold text-sm text-amber-700 dark:text-amber-400 mb-2">😤 Tregelles的艱難經歷</h5>
                        <div className="space-y-3 text-sm leading-relaxed">
                          <p className="text-foreground">
                            作為新教敬虔主義教徒，Tregelles 在天主教梵蒂岡圖書館遭遇層層攔阻：
                          </p>
                          <ul className="ml-4 space-y-1 text-muted-foreground">
                            <li>• 每日僅允許短時間閱覽</li>
                            <li>• 嚴禁攜帶紙筆或任何記錄工具</li>
                            <li>• 館員全程監督，限制研究自由</li>
                            <li>• 多次申請延長研究時間遭拒絕</li>
                          </ul>
                          <div className="bg-orange-50 dark:bg-orange-950/30 p-3 rounded border-l-4 border-orange-400 mt-3">
                            <div className="flex items-start gap-2">
                              <span className="text-orange-600 dark:text-orange-400 text-sm">🤒</span>
                              <div>
                                <p className="text-orange-800 dark:text-orange-200 font-medium text-xs mb-1">極限研究法</p>
                                <p className="text-orange-700 dark:text-orange-300 text-xs leading-relaxed">
                                  在胃病的陪同下，Tregelles 使用了各樣手段，僅憑記憶觀察抄本內容，
                                  然後趕快回到旅館將發現的重要異文變體記錄下來。
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-3">
                        <h5 className="font-semibold text-sm text-purple-700 dark:text-purple-400 mb-2">💡 意外的收穫</h5>
                        <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded border-l-4 border-purple-400">
                          <p className="text-sm text-purple-800 dark:text-purple-200 leading-relaxed">
                            儘管受到限制，Tregelles 仍然透過有限的觀察，確認了梵蒂岡抄本的重要性，
                            並為後來學者的研究奠定了基礎。他的經歷也促使後來圖書館政策的逐步開放。
                          </p>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li>
                <Collapsible open={isManuscriptEvaluationOpen} onOpenChange={setIsManuscriptEvaluationOpen}>
                  <CollapsibleTrigger className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer">
                    {isManuscriptEvaluationOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    希臘文抄本評估標準：熟優熟劣？
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 ml-6">
                    <div className="bg-stone-50 dark:bg-stone-900/50 p-4 rounded-lg border-l-4 border-green-400 space-y-4">
                      <div>
                        <h5 className="font-semibold text-sm text-green-700 dark:text-green-400 mb-2">📏 Tregelles的評估原則</h5>
                        <p className="text-sm leading-relaxed text-foreground">
                          Tregelles 發展出系統性的手稿評估方法，強調年代越古老的手稿越接近原始經文。
                          他反對當時流行的「多數文本」理論，主張應該重視古老手稿的權威性。
                        </p>
                      </div>
                      
                      <div className="border-t pt-3">
                        <h5 className="font-semibold text-sm text-blue-700 dark:text-blue-400 mb-2">⚖️ 評估標準對比</h5>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded border-l-4 border-green-500">
                            <div className="font-medium text-sm text-green-800 dark:text-green-300 mb-2">✅ 優質手稿特徵</div>
                            <ul className="text-xs space-y-1 text-green-700 dark:text-green-200">
                              <li>• 年代古老（4-6世紀）</li>
                              <li>• 地理分布廣泛</li>
                              <li>• 抄寫品質高</li>
                              <li>• 與其他古本一致</li>
                            </ul>
                          </div>
                          <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded border-l-4 border-red-500">
                            <div className="font-medium text-sm text-red-800 dark:text-red-300 mb-2">❌ 較差手稿特徵</div>
                            <ul className="text-xs space-y-1 text-red-700 dark:text-red-200">
                              <li>• 年代較晚（中世紀）</li>
                              <li>• 地區性偏見</li>
                              <li>• 抄寫錯誤多</li>
                              <li>• 明顯的編輯痕跡</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-3">
                        <h5 className="font-semibold text-sm text-purple-700 dark:text-purple-400 mb-2">🔍 梵蒂岡抄本 vs 西奈抄本</h5>
                        <div className="bg-white dark:bg-stone-800 p-3 rounded border space-y-2">
                          <div className="text-sm leading-relaxed">
                            <p className="text-foreground mb-2">
                              Tregelles 通過對比研究發現：
                            </p>
                            <ul className="ml-4 space-y-1 text-muted-foreground text-xs">
                              <li>• 兩抄本都屬於「亞歷山大里亞文本型」</li>
                              <li>• 在關鍵經文上存在重要差異</li>
                              <li>• 需要更多古抄本來確定最佳讀法</li>
                              <li>• 奠定了後來「批判經文學」的基礎</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-3">
                        <h5 className="font-semibold text-sm text-amber-700 dark:text-amber-400 mb-2">🎯 學術影響與反思</h5>
                        <div className="space-y-3">
                          <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded border-l-4 border-amber-400">
                            <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                              Tregelles 的評估方法深深影響了後來的聖經學者，包括 Westcott 和 Hort。
                              他的原則至今仍是現代經文批判學的重要基礎。
                            </p>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-950/30 p-3 rounded border-l-4 border-gray-400">
                            <div className="flex items-start gap-2">
                              <span className="text-gray-600 dark:text-gray-400 text-sm">🤔</span>
                              <div>
                                <p className="text-gray-800 dark:text-gray-200 font-medium text-xs mb-1">學術反思</p>
                                <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">
                                  然而，Tregelles 的艱難經歷也讓我們反思：即使是最嚴謹的鑒別學比較，
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
              <li className="text-sm italic">Samuel Prideaux Tregelles (1813-1874)</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              搜集狂的畢生努力
            </h3>
            <ul className="ml-11 space-y-2 text-muted-foreground">
              <li>韋氏新約希臘⽂聖經（Wettstein's NTG︔阿姆斯特丹，1751–1752）</li>
              <li>編⽬系統與「公認經⽂」</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              公關行銷的最佳典範
            </h3>
            <ul className="ml-11 space-y-2 text-muted-foreground">
              <li>伊拉斯姆的新約聖經（Erasmus's Novum Instrumentum︔巴塞爾，1516）</li>
              <li>活版印刷術的「第⼀本」與⼩楷體抄本</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
              批判學術的豐碩成果
            </h3>
            <ul className="ml-11 space-y-2 text-muted-foreground">
              <li>威式與霍式新約聖經（The New Testament in the Original Greek︔劍橋，1881）</li>
              <li>主後四世紀的經⽂型態與《英國修訂譯本》</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">6</span>
              傳統與現代的融合
            </h3>
            <ul className="ml-11 space-y-2 text-muted-foreground">
              <li>中⽂《和合本》（1911︔1890 年上海在華傳教⼠⼤會）</li>
              <li>希臘⽂底本的抉擇與取捨</li>
            </ul>
          </section>
        </main>

        {/* Conclusion */}
        <section className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-semibold mb-4">反思與結語：得來不易的聖經</h3>
          <div className="bg-muted/30 p-6 rounded border-l-4 border-primary">
            <p className="italic text-center leading-relaxed">
              西 4:16：你們念了這書信，便交給⽼底嘉的教會，叫他們也念；你們也要念從⽼底嘉來的書信。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
