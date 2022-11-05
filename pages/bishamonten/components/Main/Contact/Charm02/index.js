import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Grid, Select, Typography } from "@mui/material";

const formTypes = [
  {
    type: 0,
    name: "会社名",
    placeholder: "会社名を入力してください。",
  },
  {
    type: 0,
    name: "お名前",
    placeholder: "四川　太郎",
  },
  {
    type: 0,
    name: "お名前(フリガナ)",
    placeholder: "シセン　キンリュウ",
  },
  {
    type: 0,
    name: "メールアドレス",
    placeholder: "shisenkinryu@gmail.com",
  },
  {
    type: 0,
    name: "電話番号",
    placeholder: "090-0000-0000",
  },
  {
    type: 1,
    name: "ご住所",
    inputs: [
      {
        type: "ZIP_CODE",
        placeholder: "郵便番号(例：100-0005)",
      },
      {
        type: "PREFECTURE",
        placeholder: "--都道府県--",
        list: [
          "--都道府県--",
          "北海道",
          "青森県",
          "岩手県",
          "宮城県",
          "秋田県",
          "山形県",
          "福島県",
          "茨城県",
          "栃木県",
          "群馬県",
          "埼玉県",
          "千葉県",
          "東京都",
          "神奈川県",
          "新潟県",
          "富山県",
          "石川県",
          "福井県",
          "山梨県",
          "長野県",
          "岐阜県",
          "静岡県",
          "愛知県",
          "三重県",
          "滋賀県",
          "京都府",
          "大阪府",
          "兵庫県",
          "奈良県",
          "和歌山県",
          "鳥取県",
          "島根県",
          "岡山県",
          "広島県",
          "山口県",
          "徳島県",
          "香川県",
          "愛媛県",
          "高知県",
          "福岡県",
          "佐賀県",
          "長崎県",
          "熊本県",
          "大分県",
          "宮崎県",
          "鹿児島県",
          "沖縄県",
        ],
      },
      {
        type: "OTHER_ADDRESS",
        placeholder: "千代田区丸の内１丁目",
      },
    ],
  },
  {
    type: 2,
    name: "お問い合わせ内容",
    placeholder: "お問い合わせ内容を入力してください。",
  },
];
const AddressInputsDetail = ({ Inputs }) => {
  return Inputs.map((data, index) => {
    switch (data.type) {
      case "ZIP_CODE":
        return (
          <Grid key={index}>
            <input
              style={{
                width: "200px",
                height: "50px",
                fontSize: "0.8rem",
                borderRadius: "0",
                border: "solid 1px #a8a8a8",
                background: "none",
                outline: "none",
              }}
              type="text"
              placeholder={data.placeholder}
            />
          </Grid>
        );
      case "PREFECTURE":
        return (
          <Grid key={index}>
            <select
              style={{
                width: "200px",
                height: "50px",
                fontSize: "0.8rem",
                borderRadius: "0",
                border: "solid 1px #a8a8a8",
                background: "none",
                outline: "none",
              }}
              placeholder={data.placeholder}
            >
              {data.list.map((menuItem, index) => {
                return <option key={index}>{menuItem}</option>;
              })}
            </select>
          </Grid>
        );
      case "OTHER_ADDRESS":
        return (
          <input
            key={index}
            style={{
              marginTop: "1.4rem",
              width: "100%",
              height: "50px",
              fontSize: "0.8rem",
              borderRadius: "0",
              border: "solid 1px #a8a8a8",
              background: "none",
              outline: "none",
            }}
            type="text"
            placeholder={data.placeholder}
          />
        );

      default:
        break;
    }
  });
};

const InputDetail = () => {
  return formTypes.map((fType, index) => {
    switch (fType.type) {
      case 0:
        return (
          <Grid key={index} width="100%">
            <Grid py={0.7} display="flex" alignItems="center">
              <Grid width="25%">
                <Typography fontSize="0.9rem" variant="h3">
                  {fType.name}
                </Typography>
              </Grid>
              <input
                style={{
                  width: "100%",
                  height: "50px",
                  fontSize: "0.8rem",
                  borderRadius: "0",
                  border: "solid 1px #a8a8a8",
                  background: "none",
                  outline: "none",
                }}
                type="text"
                placeholder={fType.placeholder}
              />
            </Grid>
            <Grid my={3} width="100%" borderBottom="dashed 2px #ededed" />
          </Grid>
        );
      case 1:
        return (
          <Grid key={index} width="100%">
            <Grid py={0.7} display="flex" alignItems="center">
              <Grid width="25%">
                <Typography fontSize="0.9rem" variant="h3">
                  {fType.name}
                </Typography>
              </Grid>
              <Grid
                width="100%"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <AddressInputsDetail Inputs={fType.inputs} />
              </Grid>
            </Grid>
            <Grid my={3} width="100%" borderBottom="dashed 2px #ededed" />
          </Grid>
        );
      case 2:
        return (
          <Grid key={index} width="100%">
            <Grid py={0.7} display="flex" alignItems="center">
              <Grid width="25%">
                <Typography fontSize="0.9rem" variant="h3">
                  {fType.name}
                </Typography>
              </Grid>
              <textarea
                style={{
                  width: "100%",
                  height: "200px",
                  fontSize: "0.8rem",
                  borderRadius: "0",
                  border: "solid 1px #a8a8a8",
                  background: "none",
                  outline: "none",
                }}
                type="text"
                placeholder={fType.placeholder}
              />
            </Grid>
            <Grid my={3} width="100%" borderBottom="dashed 2px #ededed" />
          </Grid>
        );

      default:
        break;
    }
  });
};

const Charm02 = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-200px",
    triggerOnce: true,
  });

  return (
    <Section ref={ref} inView={inView}>
      <Grid
        width="90%"
        height="auto"
        bgcolor="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          py={10}
          variant="h2"
          fontFamily="serif"
          style={{
            fontSize: "2rem",
            fontWeight: "200",
            letterSpacing: "2.6px",
            lineHeight: "48px",
          }}
        >
          メールでのお問い合わせ
        </Typography>
        <Typography
          variant="h3"
          textAlign="center"
          fontSize="0.9rem"
          style={{
            letterSpacing: "1.7px",
            lineHeight: "25px",
          }}
        >
          こちらからのお問い合わせへの対応につきましては状況によりお時間を頂く場合がございます｡
          <br />
          お急ぎの場合は上記よりお電話を頂きますようお願いいたします。
          <br />
          メールでのお問い合わせは下記のフォームに必要事項をご記入の上、「送信」ボタンをクリックしてください。
        </Typography>
        <Grid py={10} width="100%" display="flex" justifyContent="center">
          <Grid width="80%">
            <InputDetail />
            <Grid mt={10} display="flex" justifyContent="center">
              <Grid border={1} width="290px" textAlign="center" bgcolor="black">
                <Typography fontSize="0.8rem" py={2} color="white">
                  上記の内容で送信する
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};
export default Charm02;

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: all 1.3s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(70px)"};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;
