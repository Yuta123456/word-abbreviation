import {
    IonBackButton, IonButton, IonButtons, IonCol, IonContent,
    IonHeader, IonIcon, IonItem, IonList, IonPage, IonRouterLink, IonRow, IonText, IonTitle, IonToolbar
} from '@ionic/react';
import { arrowBack, chevronBackOutline } from 'ionicons/icons';
import React from 'react';
import { useHistory } from 'react-router';
import { NavHashLink } from 'react-router-hash-link';
import './about.css';
const About: React.FC = () => {
    let history = useHistory();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerLink="/" routerDirection="back">
                            <IonIcon icon={chevronBackOutline} />
                                Back
                        </IonButton>
                    </IonButtons>
                    <IonButtons slot="end">
                    </IonButtons>
                    <IonTitle>ことばず</IonTitle>
                </IonToolbar>
                <IonToolbar>

                    <IonRow className="ion-text-center">
                        <IonCol>
                            <NavHashLink className="nav-hash-link"
                                smooth to="#about"
                                activeClassName="selected"
                                activeStyle={{ color: 'red' }}>
                                ことばず！とは
                        </NavHashLink>
                        </IonCol>
                        <IonCol>
                            <NavHashLink className="nav-hash-link"
                                smooth to="#howtouse"
                                activeClassName="selected"
                                activeStyle={{ color: 'red' }}>
                                使い方
                        </NavHashLink>
                        </IonCol>
                        <IonCol>
                            <NavHashLink className="nav-hash-link"
                                smooth to="#tips" activeClassName="selected"
                                activeStyle={{ color: 'red' }}>
                                コツ
                        </NavHashLink>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h6 className="ion-text-center">
                    言葉を略してバズらせろ！
                </h6>
                <h2 className="ion-text-center">
                    ことばず！
                </h2>
                <div className="ion-padding about-section" id="about">
                    <h3 className="title">
                        ことばずについて
                    </h3>
                    <p>このアプリでは、言葉を略すことが出来ます。略した言葉たちはアプリ内で保存ができ、Twitter等でシェア出来ます。</p>
                    <p>普段良く使う言葉の良い略称が思いつかない際や、面白い略称が欲しいときは「ことばず！」で言葉を略しましょう。</p>
                </div>

                <div className="ion-padding about-section" id="howtouse">
                    <h3>
                        ことばず！の遊び方
                    </h3>
                    <h5>まずは略語を作成しよう</h5>
                    <ol>
                        <li>右下の＋ボタンをタップ</li>
                        <li>略したい言葉を入力</li>
                        {/* TODO: ボタンを名前をもう少し考える */}
                        <li>ボタンをタップ</li>
                        <li>出来た略語を保存</li>
                    </ol>
                    <h5>略語を作成したら...</h5>
                    <ul>
                        <li>
                            <section>
                                <p>日常生活でさりげなく使って流行らせよう！</p>
                            ✖:「お前先週の進撃の巨人みた～？」<br />
                            〇:「お前先週の"シンキョジ"みた～？」
                            </section>
                        </li>
                        <li>
                            <section>
                                <p>シェア機能を使ってTwitter等でバズらせよう！</p>
                            </section>
                        </li>
                    </ul>
                </div>
                <div className="ion-padding about-section" id="tips">
                    <h3>ことばず！のコツ</h3>
                    <h5>上手くいかない例</h5>
                    <ol>
                        <li>
                            <section>
                                <p>英単語はNG。カタカナなどにしましょう。</p>
                                ✖:programming<br />
                                〇:プログラミング
                            </section>
                        </li>
                        <li>
                            <section>
                                <p>固有名詞はNG。意味が通る部分で接続詞で繋ぐと上手くいくことが多いです。</p>
                                ✖:スプラトゥーン<br />
                                〇:スプラとトゥーン
                            </section>
                        </li>
                        <li>
                            <section>
                                <p>短すぎるとNG</p>
                                ✖:森<br />
                                〇:木がいっぱいある場所
                            </section>
                        </li>
                    </ol>
                </div>
            </IonContent >
        </IonPage >
    );
}
export default About;