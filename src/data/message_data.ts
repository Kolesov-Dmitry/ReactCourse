// Тип данных, описывающий одно сообщение
export type MessageData = {
  author: string  // Автор сообщения
  text:   string  // Текст сообщения
  income: boolean // Флаг входящее ли сообщение
};

// Сигнатура функции ответа на сообщение
// Не очень хорошо, что она лежит тут, 
// но пока я не придумал куда ёё лучше запихать...
export type AddMessageFunc = (chatId: number, author: string, text: string, income: boolean) => void;