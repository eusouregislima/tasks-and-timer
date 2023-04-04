import { PlusCircle, Trash, Checks } from 'phosphor-react'

import {
  Button,
  ContainerForm,
  ContainerInfo,
  ContainerTask,
  Input,
  Text,
  ToDoContainer,
} from './styles'

export function ToDo() {
  return (
    <ToDoContainer>
      <ContainerForm>
        <form>
          <Input
            type="text"
            placeholder="Adicione uma tarefa"
            title="Adicionar tarefa"
          />
          <Button>
            Criar <PlusCircle size={20} />
          </Button>
        </form>
      </ContainerForm>
      <ContainerInfo>
        <span>
          <Text>Tarefas criadas</Text>
          <div>
            <p>0</p>
          </div>
        </span>
        <span>
          <Text>Concluídas</Text>
          <div className="info">
            <p>2</p> <p>de</p> <p>5</p>
          </div>
        </span>
      </ContainerInfo>
      <ContainerTask>
        <div className="input">
          <button id="ok">
            <Checks size={20} />
          </button>
        </div>
        <div className="label">
          <label>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non
            velit.
          </label>
        </div>
        <div className="svg">
          <button>
            <Trash size={20} />
          </button>
        </div>
      </ContainerTask>
      <ContainerTask>
        <div className="input">
          <button id="ok">
            <Checks size={20} />
          </button>
        </div>
        <div className="label">
          <label>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non
            velit.
          </label>
        </div>
        <div className="svg">
          <button>
            <Trash size={20} />
          </button>
        </div>
      </ContainerTask>
      <ContainerTask>
        <div className="input">
          <button id="ok">
            <Checks size={20} />
          </button>
        </div>
        <div className="label">
          <label>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non
            velit.
          </label>
        </div>
        <div className="svg">
          <button>
            <Trash size={20} />
          </button>
        </div>
      </ContainerTask>
      <ContainerTask>
        <div className="input">
          <button id="ok">
            <Checks size={20} />
          </button>
        </div>
        <div className="label">
          <label>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non
            velit.
          </label>
        </div>
        <div className="svg">
          <button>
            <Trash size={20} />
          </button>
        </div>
      </ContainerTask>
      <ContainerTask>
        <div className="input">
          <button id="ok">
            <Checks size={20} />
          </button>
        </div>
        <div className="label">
          <label>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non
            velit.
          </label>
        </div>
        <div className="svg">
          <button>
            <Trash size={20} />
          </button>
        </div>
      </ContainerTask>
    </ToDoContainer>
  )
}
