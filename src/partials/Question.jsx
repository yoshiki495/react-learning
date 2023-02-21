function Question(props) {
    if(props.id === "01") {
      return (
        <div className="bg-gray-200 p-4">
          <p>数値型の変数aには、<strong>10</strong>を代入してください。</p>
          <p>文字列型の変数bには、<strong>"Hello World"</strong>を代入してください。</p>
          <p>真偽値型の変数cには、<strong>false</strong>を代入してください。</p>
        </div>
      );
    } else if(props.id === "02") {
      return (
        <div className="bg-gray-200 p-4">
          <p>配列型の変数<strong>fruits</strong>に、以下の3つの要素を格納してください。</p>
          <ul className="list-disc pl-4">
            <li>りんご</li>
            <li>バナナ</li>
            <li>みかん</li>
          </ul>
        </div>
      )
    }
  }

export default Question;