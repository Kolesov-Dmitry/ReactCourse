type SendMessageFunc = (chatId: number, author: string, text: string) => void;

export class Robot { 
  // properties 
  sendMessage: SendMessageFunc
  chatId: number
  answers: string[]

  constructor(chatId: number, sendMessage: SendMessageFunc) {
    this.sendMessage = sendMessage;
    this.chatId = chatId;

    this.answers = [
      'Нормально!',
      'Вроде ничего',
      'Бывало и получше',
      'Так я тебе и сказал...',
    ];
  }

  // Отвечает на сообщение с задержкой в 1 сек.
  answer() {
    setTimeout(() => {
      this.sendMessage(
        this.chatId,
        'Robot', 
        this.pickTheAnswer()        
      );
    }, 1000);      
  }

  // Случайно выбирает ответ на сообщение пользователя
  private pickTheAnswer(): string {
    const idx: number = Math.floor(Math.random() * this.answers.length);

    return this.answers[idx];
  }
}