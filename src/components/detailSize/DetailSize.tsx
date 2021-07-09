import React from "react";
import "../smDetailPage/SmDetailPage.css";

export const DetailSize: React.FC = ( ) => {
    return (
            <section className="g-block-sm p-spec" id="js-product-spec">
                <h2 className="g-h-2 g-h-i p-hd"><i className="g-s g-s-size" aria-hidden="true"></i><span>仕様・サイズ</span></h2>
                <div id="p-specMore" aria-hidden="false" data-accordion-more="">
                    <ul className="g-flow-lg g-flow-half g-unit js-sku-manuals p-sku-manuals">
                    </ul>
                    <table className="g-table-a js-sku-specs">
                        <tbody>
                            <tr>
                                <th>商品コード</th>
                                <td>10700</td>
                            </tr>
                            <tr>
                                <th>カラー</th>
                                <td>black</td>
                            </tr>
                            <tr>
                                <th>サイズ</th>
                                <td>幅78.1×奥行7.4×長さ160.8mm</td>
                            </tr>
                            <tr>
                                <th>素材</th>
                                <td>其他</td>
                            </tr>
                            <tr>
                                <th>重量</th>
                                <td>226g</td>
                            </tr>
                            <tr>
                                <th>保証年数</th>
                                <td>3年</td>
                            </tr>
                            <tr>
                                <th>組立時間</th>
                                <td>15分</td>
                            </tr>
                            <tr>
                                <th>梱包サイズ</th>
                                <td>幅100×奥行10×高さ188cm</td>
                            </tr>
                            {/* hidden="hidden" */}
                            <tr>
                                <th>原産国</th>
                                <td>中国</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
    );
  };
  