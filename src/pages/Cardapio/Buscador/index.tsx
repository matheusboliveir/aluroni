import React, { memo, useMemo } from "react";
import { CgSearch } from "react-icons/cg";
import styles from "./Buscador.module.scss";

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

function Buscador({ busca, setBusca }: Props) {
	const icon = useMemo(() => <CgSearch size={20} color="#4c4d5e" />,[]);
	return (
		<div className={styles.buscador}>
			<input
				value={busca}
				onChange={(evento) => setBusca(evento.target.value)}
				type="text"
				placeholder="Buscar"
			/>
			{icon}
		</div>
	);
}

export default memo(Buscador);
