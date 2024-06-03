import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  Tag,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const Stacks: { [key: string]: string[] } = {
  Frontend: ["HTML/CSS", "React", "TypeScript", "Next.js"],
  Backend: ["Node.js", "MySql"],
};

const CookaContent = () => {
  return (
    <Flex direction={"column"} gap={"20"} fontSize={"18px"}>
      <Flex direction={"column"} gap={"6"}>
        <Heading size={"lg"}>🔥 목표</Heading>
        <Flex direction={"column"} gap={"2"}>
          <Text>
            이 프로젝트는 백엔드와 프론트엔드에 대한 이해를 높이기 위해 진행한
            첫 번째 풀스택 프로젝트입니다.
          </Text>
          <Text>
            런타임 에러를 최소화하기 위해 TypeScript를 도입하여 사용합니다.
          </Text>
          <Text>
            또한, React의 장점인 컴포넌트 기반 관리를 익히는 것을 목표로
            했습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={"6"}>
        <Heading size={"lg"}>💻 소개</Heading>
        <Flex direction={"column"} gap={"2"}>
          <Text>
            요리를 좋아하는 사람들을 위한 간단한 커뮤니티 사이트입니다.
          </Text>
          <Text>
            서로의 레시피 , 맛집을 공유할 수 있고, 댓글로 의견을 나눌 수
            있습니다.
          </Text>
          <Text>
            그 외에 요리와 관련된 질문/답변 서비스와 음식관련 뉴스페이지를
            제공합니다.
          </Text>
          <Text>좋아요, 댓글로 마음에 드는 게시물을 모아볼 수도 있습니다.</Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={"6"}>
        <Heading size={"lg"}>🛠️ 기술 스택</Heading>
        <Flex gap={2} direction={"column"}>
          {Object.keys(Stacks).map((key) => {
            return (
              <Flex alignItems={"center"} key={key}>
                <Heading size={"md"} flex={1}>
                  {key}
                </Heading>
                <Flex flex={5} gap={2}>
                  {Stacks[key].map((stack) => {
                    return (
                      <Tag key={stack} p={2} colorScheme="gray">
                        {stack}
                      </Tag>
                    );
                  })}
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>

      <Heading size={"lg"}>⚙️ 구현기능</Heading>

      <Flex direction={"column"} gap={"4"}>
        <Heading size={"md"}>⚡ 로그인</Heading>
        <Flex boxShadow={"md"}>
          <Box flex={1}>
            <Image src="cooka/cookalogin.png" alt="cookalogin" />
          </Box>
          <Box flex={1}>
            <Image src="cooka/cookajoin.png" alt="cookajoin" />
          </Box>
        </Flex>

        <UnorderedList spacing={"2"}>
          <ListItem>
            전통적인 방식인 Session 을 이용해 로그인 방식을 구현 하였습니다.
          </ListItem>
          <ListItem>
            Session이 어떻게 동작 하는지 이해하고 Session을 파일이 아닌
            MySQL에서 제공되는 Session을 활용하여 구현하였습니다.
          </ListItem>
          <ListItem>
            Crypto모듈을 사용하여 비밀번호를 암호화하여 저장하고, Salt 암호화를
            통해 보안성을 높였습니다.
          </ListItem>
          <ListItem>
            KaKao Oauth API를 이용해 소셜로그인을 구현하였습니다.
          </ListItem>
        </UnorderedList>
      </Flex>

      <Flex gap={"4"}>
        <Box flex={1} boxShadow={"md"}>
          <Image src="cooka/cookapost.png" alt="cookapost" />
        </Box>
        <Flex gap={2} direction={"column"} flex={1} my={"12"}>
          <Heading size={"md"}>⚡ 포스팅</Heading>
          <UnorderedList spacing={"2"}>
            <ListItem>
              이미지나, 폰트 스타일 등 게시글의 퀄리티를 높이기 위해 text-area를
              대신하여 React-quill 라이브러리를 사용하였습니다.
            </ListItem>
            <ListItem>
              해당 글작성자는 포스팅을 수정, 삭제할 수 있습니다.
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>

      <Flex gap={"4"}>
        <Box flex={1} boxShadow={"md"}>
          <Image src="cooka/cookaposting.png" alt="cookaposting" />
        </Box>
        <Flex gap={2} direction={"column"} flex={1} my={"12"}>
          <Heading size={"md"}>⚡ 좋아요 / 댓글</Heading>
          <UnorderedList spacing={"2"}>
            <ListItem>
              관계형 데이터베이스를 바탕으로 게시글당 좋아요, 댓글을
              구현하였습니다.
            </ListItem>
            <ListItem>해당 댓글작성자는 수정, 삭제할 수 있습니다.</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={"4"}>
        <Heading size={"md"}>⚡ 검색</Heading>
        <Image src="cooka/cookasearch.png" alt="cookasearch" />
        <UnorderedList spacing={"2"}>
          <ListItem>
            사용자가 원하는 게시물을 찾기 위해 검색기능을 구현하였습니다.
          </ListItem>
          <ListItem>
            router의 query를 이용해 검색기능을 구현하였습니다.
          </ListItem>
          <ListItem>
            검색어를 입력하면 해당 검색어를 포함하는 게시물을 찾아서 보여줍니다.
          </ListItem>
          <ListItem>
            검색어를 입력하지 않고 검색을 시도하면, 전체 게시물을 보여줍니다.
          </ListItem>
        </UnorderedList>
      </Flex>

      <Flex direction={"column"} gap={"4"}>
        <Heading size={"md"}>⚡ 화제의 게시글</Heading>
        <Image src="cooka/cookamain.png" alt="cookamain" />
        <UnorderedList spacing={"2"}>
          <ListItem>
            메인페이지에서는 좋아요를 기준으로 화제의 게시글을 보여줍니다.
          </ListItem>
        </UnorderedList>
      </Flex>

      <Flex direction={"column"} gap={"4"}>
        <Heading size={"md"}>⚡ 마이페이지</Heading>
        <Image src="cooka/cookamypage.png" alt="cookamypage" />
        <UnorderedList spacing={"2"}>
          <ListItem>
            로그인한 사용자는 마이페이지에서 자신이 작성한 게시글을 볼 수
            있습니다.
          </ListItem>
          <ListItem>
            자신이 좋아요나 댓글을 단 게시글을 모아볼 수 있습니다.
          </ListItem>
          <ListItem>
            프로필이미지를 변경하거나 소갯말을 변경할 수 있습니다.
          </ListItem>
        </UnorderedList>
      </Flex>

      <Flex direction={"column"} gap={"4"}>
        <Heading size={"md"}>⚡ 배포</Heading>
        <UnorderedList spacing={"2"}>
          <ListItem>
            AWS의 EC2를 이용하여 서버를 구축하고, pm2 를 이용하여 백그라운드로
            실행했습니다.
          </ListItem>
          <ListItem>도메인을 구입하여, 도메인을 연결하였습니다.</ListItem>
          <ListItem>
            nginx 를 사용하여 http://cooka.site 접속시 80포트에서 3000포트로
            포트포워딩을 했습니다.
          </ListItem>
        </UnorderedList>
      </Flex>

      <Flex direction={"column"} gap={"4"}>
        <Heading size={"md"}>🚩 마치며 느낀점</Heading>
        <UnorderedList spacing={"2"}>
          <ListItem>
            비교적 오랜 시간 소요되었다고 생각합니다. Next.js, TypeScript에
            익숙하지 않았고, 백엔드 서버를 구축하고, MySQL을 사용하는 것에
            무지했기에 공부가 필요했습니다. 프로젝트를 진행하며 해당 기술 스택에
            대해 이해도가 높아졌다고 생각합니다.
          </ListItem>
          <ListItem>
            프로젝트를 진행하면서, 백엔드와 프론트엔드의 연결을 이해하고,
            데이터베이스를 어떻게 설계하고, 관리하는지에 대해 배울 수
            있었습니다.
          </ListItem>
          <ListItem>
            또한, TypeScript를 사용하여 런타임 에러를 최소화하는 방법을 배울 수
            있었습니다.
          </ListItem>
          <ListItem>
            프로젝트를 진행하면서, 레이아웃을 구성하는 것에 대해 고민해보았고,
            사용자가 편리하게 사용할 수 있는 웹사이트를 만들 수 있었습니다.
          </ListItem>
          <ListItem>
            반복적인 코드를 사용하면 가독성이 떨어지고 수정이 매우 힘들어진다는
            걸 알게 됐고, 코드에 대한 설계와 리팩토링의 중요성을 깨닫게
            되었습니다.
          </ListItem>
        </UnorderedList>
      </Flex>
    </Flex>
  );
};

export default CookaContent;
