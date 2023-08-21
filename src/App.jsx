import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const data = [
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
    stock: 20,
    edit: false
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
    stock: 18,
    edit: false
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55,
    stock: 34,
    edit: false
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
    stock: 10,
    edit: false
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    stock: 25,
    edit: false
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
    stock: 20,
    edit: false
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
    stock: 18,
    edit: false
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
    stock: 20,
    edit: false
  },
]

function App() {
  const [todo, setTodo] = useState(data)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
          </tr>
        </thead>
        <tbody>
          {todo.map( (item) => {
            //無修改頁面時
            if (!item.edit) {
              return(
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td><small>{item.description}</small></td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => {
                      const newTodo = todo.map((newItem) => {
                        if (newItem.id === item.id) {
                          //最低庫存量為0，0後不能再減
                          newItem.stock > 0 ? newItem.stock-- : newItem.stock;
                        }
                        else {
                          newItem.stock;
                        }

                        return newItem;
                      });

                      setTodo(newTodo);
                    }}>-</button>

                    <span>{item.stock}</span>

                    <button onClick={() => {
                      const newTodo = todo.map((newItem) => {
                        if (newItem.id === item.id) {
                          newItem.stock++;
                        }
                        else {
                          newItem.stock;
                        }

                        return newItem;
                      });

                      setTodo(newTodo);
                    }}>+</button>
                  </td>
                  <td><button onClick={() => {
                    const newTodo = todo.map((newItem) => {

                      if (newItem.id === item.id) {
                        newItem.edit = !newItem.edit;
                      }
                      else {
                        newItem.edit;
                      }

                      return newItem;
                    });

                    setTodo(newTodo);
                  }}>{item.edit ? '儲存' : '修改'}</button></td>
                </tr>
              );
            }
            //修改頁面列時
            else {
              return(
                <tr key={item.id}>
                  <td>
                    <input type="text" value={item.name} name='name' onChange={(e) => {
                      const newTodo = todo.map((newItem) => {
                        if (newItem.id === item.id) {
                          newItem.name = e.target.value;
                        }
                        else {
                          newItem.name;
                        }

                        return newItem;
                      });

                      setTodo(newTodo);
                    }} />
                  </td>
                  <td><small>
                    <input type='text' value={item.description} name='description' onChange={(e) => {
                      const newTodo = todo.map((newItem) => {
                        if (newItem.id === item.id) {
                          newItem.description = e.target.value;
                        }
                        else {
                          newItem.description;
                        }

                        return newItem;
                      });

                      setTodo(newTodo);
                    }} />
                  </small></td>
                  <td>
                    <input type='text' value={item.price} name='price' onChange={(e) => {
                      const newTodo = todo.map((newItem) => {
                        if (newItem.id === item.id) {
                          newItem.price = e.target.value;
                        }
                        else {
                          newItem.price;
                        }

                        return newItem;
                      });

                      setTodo(newTodo);
                    }} />
                  </td>
                  <td>
                    <input type='text' value={item.stock} onChange={(e) => {
                      const newTodo = todo.map((newItem) => {
                        if (newItem.id === item.id) {
                          newItem.stock = e.target.value;
                        }
                        else {
                          newItem.stock;
                        }

                        return newItem;
                      });

                      setTodo(newTodo);
                    }} />
                  </td>
                  <td><button onClick={() => {
                    const newTodo = todo.map((newItem) => {

                      if (newItem.id === item.id) {
                        newItem.edit = !newItem.edit;
                      }
                      else {
                        newItem.edit;
                      }

                      return newItem;
                    });

                    setTodo(newTodo);
                  }}>{item.edit ? '儲存' : '修改'}</button></td>
                </tr>
              );
            }
          })}
          
          
        </tbody>
      </table>
    </div>
  )
}

export default App;
