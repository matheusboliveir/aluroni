import classNames from "classnames";
import { memo, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import opcoes from "./opcoes.json";
import styles from "./Ordenador.module.scss";

export type OpcoesOrdenador = "" | "porcao" | "qtd_pessoas" | "preco";

interface Props {
  ordenador: OpcoesOrdenador;
  setOrdenador: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>;
}

function Ordenador({ ordenador, setOrdenador }: Props) {
	const [aberto, setAberto] = useState(false);
	const nomeOrdenador =
    ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;

	return (
		<button
			className={classNames({
				[styles.ordenador]: true,
				[styles["ordenador--ativo"]]: ordenador !== "",
			})}
			onClick={() => setAberto(!aberto)}
			onBlur={() => setAberto(false)}
		>
			<span>{nomeOrdenador || "Ordenar Por"}</span>
			{aberto ? (
				<MdKeyboardArrowUp size={20} />
			) : (
				<MdKeyboardArrowDown size={20} />
			)}
			<div
				className={classNames({
					[styles.ordenador__options]: true,
					[styles["ordenador__options--ativo"]]: aberto,
				})}
			>
				{opcoes.map((opcao) => (
					<div
						onClick={() => setOrdenador(opcao.value as OpcoesOrdenador)}
						className={styles.ordenador__option}
						key={opcao.value}
					>
						{opcao.nome}
					</div>
				))}
			</div>
		</button>
	);
}

export default memo(Ordenador);