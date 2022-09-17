import {useState} from "react";
import {HStack, Input, Button, useToast} from "@chakra-ui/react";

const Form = ({createTodo}) => {
    // 入力欄の状態を監視するstateを定義
    const [enteredTodo, setEnteredTodo] = useState("");

    const toast = useToast()

    const addTodo = (e) => {
        // リロードを防ぐ
        e.preventDefault();

        if (!enteredTodo) {
            toast({
                title: "新しいタスクを入力してください",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
            return
        }

        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: enteredTodo,
        }
        createTodo(newTodo);

        setEnteredTodo("");
    };

    return (
        <div>
            {/* formだとリクエストを送ったらページがリロードされる */}
            <form onSubmit={addTodo}>
                <HStack>
                    <Input
                        placeholder="新しいタスク"
                        _placeholder={{opacity: "0.3", color: "gray.500"}}
                        size="lg"
                        p={3}
                        bgColor="white"
                        borderColor='gray.200'
                        variant="flushed"
                        value={enteredTodo}
                        onChange={(e) => setEnteredTodo(e.target.value)}
                    />
                    <Button
                        colorScheme="blue"
                        size="md"
                        variant="outline"
                        bgColor="white"
                        px={7}
                        type="submit"
                    >
                        追加
                    </Button>
                </HStack>
            </form>
        </div>
    )
}

export default Form;
