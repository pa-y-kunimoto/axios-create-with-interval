import {sampleApiClient} from "./api/sampleApiClient";

const main = async () => {
  const names = [
    "Noby", // のび太
    "Sue", // しずか
    "Big G", // ジャイアン
    "Sneech", // スネ夫
    "Doraemon", // ドラえもん
  ];

  // 配列の処理が非同期で行われないように、呼び出し側で要注意
  for (const name of names) {
    // 500ms待ってから、APIリクエストを行う
    const { data } = await sampleApiClient.get<string>("/api/hello", {
      params: { name },
    }).catch((error) => {
      console.error(error);
      throw error;
    });
    console.log(data); // e.g. Hello, Noby!
  }
};

main();
