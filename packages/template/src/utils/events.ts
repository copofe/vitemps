import mitt from 'mitt';

type Events = {
  pageFresh: boolean;
}

/**
 * 事件分发/订阅
 * @see Usage {@link https://github.com/developit/mitt}
 */
export default mitt<Events>();
