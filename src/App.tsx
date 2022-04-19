import React, { useState, useMemo } from "react";
import "./App.css";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Tag, Image } from "antd";
import { colors } from "src/utils/utils";
import liuben from "src/image/liuben.png";
import wangshu from "src/image/wangshu.png";
import songjianxin from "src/image/songjianxin.png";
import wangxianqiao from "src/image/wangxianqiao.jpg";
import shenliyang from "src/image/shenliyang.jpg";
import suming from "src/image/suming.jpg";

const names = ["奔", "舒", "鑫", "硚", "阳", "铭"];
const BodyWrap = styled.div`
  font-size: 1rem;
  padding-top: 20px;
  height: 100vh;
`;
const ImgWrap = styled.div`
  width: 320px;
`;

const TagWrap = styled.div`
  margin: 5px;
`;

function ImgBox({ name }: { name?: string }) {
  const result = useMemo(() => {
    switch (name) {
      case names[0]:
        return <Image src={liuben} preview={false} />;
      case names[1]:
        return <Image src={wangshu} preview={false} />;
      case names[2]:
        return <Image src={songjianxin} preview={false} />;
      case names[3]:
        return <Image src={wangxianqiao} preview={false} />;
      case names[4]:
        return <Image src={shenliyang} preview={false} />;
      case names[5]:
        return <Image src={suming} preview={false} />;
      default:
        return <Image preview={false} />;
    }
  }, [name]);
  return <ImgWrap>{result}</ImgWrap>;
}

function App() {
  const [name, setName] = useState<string>();

  const handleSet = (name: string) => {
    const filters = names.filter((n) => n !== name);
    const radan = Math.floor(Math.random() * filters.length);
    setName(filters[radan]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <BodyWrap>
          {!name ? (
            <>
              是哪个大宝贝来扫红包了？
              <TagWrap>
                {names.map((n, i) => (
                  <Tag
                    key={n}
                    color={colors[i % colors.length]}
                    onClick={() => handleSet(n)}
                  >
                    {n}
                  </Tag>
                ))}
              </TagWrap>
            </>
          ) : (
            <>
              <div>此码属于 “{name}” </div>
              <ImgBox name={name} />
            </>
          )}
        </BodyWrap>
      </header>
    </div>
  );
}

export default App;
