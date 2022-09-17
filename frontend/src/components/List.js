import {HStack, IconButton, StackDivider, VStack, Text} from "@chakra-ui/react";
import {VscCheck} from "react-icons/vsc";

const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        // 縦並びのコンポーネントを使うとき定義
        // メディアクエリの代わりになる
        <VStack
            divider={<StackDivider/>}
            width="80%"
            bgColor="white"
            color={{sm: 'red.600', md: 'blue.600', lg: 'green.600', xl: 'red.600'}}
            borderColor="black.100"
            borderWidth="1px"
            borderRadius="3px"
            p={5}
            alignItems="start"
        >
            {todos.map(todo => {
                return (
                    // 横並び
                    <HStack key={todo.id}>
                        <IconButton onClick={() => complete(todo.id)}
                                    icon={<VscCheck/>}
                                    isRound
                                    bgColor="cyan.100"
                                    opacity="0.5"
                        >完了</IconButton>
                        <Text>{todo.content}</Text>
                    </HStack>
                )
            })}
        </VStack>
    );
}

export default List;