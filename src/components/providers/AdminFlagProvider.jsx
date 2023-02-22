import { createContext } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
    const { children } = props;
    
    // 動作確認のためのオブジェクト
    const sampleObj = { sampleValue: "サンプル" };
    
    // AdminFlagContext の中にprovider があるのでそれで children を囲む
    // value のなかにグローバルに扱う実際の値を設定
    return (
        <AdminFlagContext.Provider value={sampleObj}>
            {children}
        </AdminFlagContext.Provider>
    );
};
